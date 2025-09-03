const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const MpesaTransaction = require("../models/MpesaTransaction");

// === Utility: Get Access Token ===
const getAccessToken = async () => {
  const auth = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
  ).toString("base64");

  const res = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers: { Authorization: `Basic ${auth}` },
    }
  );

  return res.data.access_token;
};

// === Utility: Format Timestamp ===
const getTimestamp = () => {
  const date = new Date();
  return (
    date.getFullYear().toString() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2)
  );
};

// === Utility: Translate ResultCode to status and message ===
const getResultDetails = (code) => {
  const map = {
    0: {
      status: "success",
      message: "✅ Payment successful. Thank you for your donation!",
    },
    1: {
      status: "insufficient_funds",
      message: "❌ Transaction failed: Insufficient balance.",
    },
    1032: {
      status: "cancelled_by_user",
      message: "⚠️ You cancelled the transaction.",
    },
    1037: {
      status: "timeout_user_unreachable",
      message: "⌛ Timeout: No response received. Please try again.",
    },
    2001: {
      status: "invalid_phone_number",
      message: "❌ Invalid phone number or transaction initiator.",
    },
  };

  return map[code] || {
    status: "failed",
    message: "❌ Transaction failed. Please try again later.",
  };
};

// === STK Push Route ===
router.post("/stkpush", async (req, res) => {
  const { phone, amount } = req.body;

  try {
    const accessToken = await getAccessToken();
    const timestamp = getTimestamp();
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString("base64");

    const payload = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: process.env.MPESA_CALLBACK_URL,
      AccountReference: "Donation",
      TransactionDesc: "Donation to FutureTech",
    };

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;

    // ✅ Save initial pending transaction to MongoDB
    await MpesaTransaction.create({
      phone,
      amount,
      checkoutRequestID: data.CheckoutRequestID,
      status: "pending",
      message: "📲 Waiting for user to authorize the transaction...",
    });

    return res.status(200).json({
      success: true,
      message: data.CustomerMessage,
      checkoutRequestID: data.CheckoutRequestID,
    });
  } catch (error) {
    console.error("❌ STK Push Error:", error.response?.data || error.message);
    return res
      .status(500)
      .json({ success: false, message: "STK Push failed. Please try again." });
  }
});

// === M-PESA Callback Route ===
router.post("/callback", async (req, res) => {
  const callback = req.body?.Body?.stkCallback;

  if (!callback) {
    return res.status(400).json({ message: "Invalid callback structure" });
  }

  const { CheckoutRequestID, ResultCode, ResultDesc } = callback;
  const { status, message } = getResultDetails(ResultCode);

  try {
    // ✅ Update transaction in MongoDB
    await MpesaTransaction.findOneAndUpdate(
      { checkoutRequestID: CheckoutRequestID },
      {
        status,
        resultCode: ResultCode,
        description: ResultDesc,
        message,
        timestamp: new Date(),
      }
    );

    return res.status(200).json({ message: "Callback received successfully" });
  } catch (error) {
    console.error("❌ Callback update error:", error.message);
    return res.status(500).json({ message: "Failed to process callback" });
  }
});

// === GET Payment Status ===
router.get("/status/:checkoutId", async (req, res) => {
  const { checkoutId } = req.params;

  try {
    const transaction = await MpesaTransaction.findOne({
      checkoutRequestID: checkoutId,
    });

    if (!transaction) {
      return res.status(404).json({
        status: "unknown",
        message: "No transaction found with that CheckoutRequestID",
      });
    }

    return res.json(transaction);
  } catch (error) {
    console.error("❌ Status check error:", error.message);
    return res.status(500).json({ message: "Failed to fetch transaction" });
  }
});

module.exports = router;
