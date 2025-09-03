const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const latestCallbacks = {}; // In-memory store

// === Utility: Get Access Token ===
const getAccessToken = async () => {
  const auth = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
  ).toString("base64");

  console.log("🔐 Fetching M-Pesa access token...");

  const res = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers: { Authorization: `Basic ${auth}` },
    }
  );

  console.log("✅ Access token received.");
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

// === Utility: Translate ResultCode to UX-friendly status and message ===
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

  console.log("📲 Initiating STK Push...");
  console.log("➡️ Phone:", phone);
  console.log("➡️ Amount:", amount);

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

    console.log("📡 Sending STK Push request to M-Pesa...");

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

    console.log("✅ STK Push initiated.");
    console.log("🆔 CheckoutRequestID:", data.CheckoutRequestID);
    console.log("💬 Message from M-Pesa:", data.CustomerMessage);

    // Store initial pending status
    latestCallbacks[data.CheckoutRequestID] = {
      status: "pending",
      message: "📲 Waiting for user to authorize the transaction...",
      timestamp: new Date().toISOString(),
    };

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
router.post("/callback", (req, res) => {
  const callback = req.body?.Body?.stkCallback;

  if (!callback) {
    console.error("❌ Invalid callback received:", JSON.stringify(req.body));
    return res.status(400).json({ message: "Invalid callback structure" });
  }

  const { CheckoutRequestID, ResultCode, ResultDesc } = callback;

  console.log("📥 M-Pesa Callback Received:");
  console.log("🆔 CheckoutRequestID:", CheckoutRequestID);
  console.log("📊 ResultCode:", ResultCode);
  console.log("📝 ResultDesc:", ResultDesc);

  const { status, message } = getResultDetails(ResultCode);

  latestCallbacks[CheckoutRequestID] = {
    status,
    message,
    resultCode: ResultCode,
    description: ResultDesc,
    timestamp: new Date().toISOString(),
  };

  console.log(`✅ Status updated: ${status}`);
  return res.status(200).json({ message: "Callback received successfully" });
});

// === GET Payment Status ===
router.get("/status/:checkoutId", (req, res) => {
  const { checkoutId } = req.params;

  console.log("📤 Status requested for CheckoutRequestID:", checkoutId);

  const status = latestCallbacks[checkoutId];

  if (!status) {
    console.warn("⚠️ No record found for this CheckoutRequestID.");
    return res.status(404).json({
      status: "unknown",
      message: "No transaction found with that CheckoutRequestID",
    });
  }

  console.log("✅ Status response:", status);
  return res.json(status);
});

module.exports = router;
