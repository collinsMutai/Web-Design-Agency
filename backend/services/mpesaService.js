const axios = require("axios");
const MpesaTransaction = require("../models/MpesaTransaction");

// === Exponential Backoff Function ===
const retryWithExponentialBackoff = async (fn, maxRetries = 5, initialDelay = 1000, factor = 2) => {
  let attempt = 0;
  let delay = initialDelay;

  while (attempt < maxRetries) {
    try {
      return await fn(); // Try to execute the function
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) {
        throw error; // Exceeded max retries
      }
      console.error(`Attempt ${attempt} failed: ${error.message}`);
      console.log(`Retrying in ${delay}ms...`);

      // Exponential backoff: Increase delay exponentially
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= factor; // Increase delay (e.g., 1000ms -> 2000ms -> 4000ms)
    }
  }
};

// === Utility: Get Access Token ===
const getAccessToken = async () => {
  try {
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
  } catch (error) {
    console.error("Error while fetching access token:", error);
    throw new Error("Unable to fetch M-PESA access token.");
  }
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

// === Initiate STK Push with Exponential Backoff ===
const initiateStkPush = async ({ phone, amount }) => {
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

    // Retry the STK Push request with exponential backoff
    const response = await retryWithExponentialBackoff(() =>
      axios.post(
        "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
    );

    const data = response.data;

    // Save initial pending transaction to MongoDB
    await MpesaTransaction.create({
      phone,
      amount,
      checkoutRequestID: data.CheckoutRequestID,
      status: "pending",
      message: "📲 Waiting for user to authorize the transaction...",
    });

    return data;
  } catch (error) {
    console.error("Error initiating STK Push:", error);
    throw new Error("Failed to initiate STK Push. Please try again.");
  }
};

// === Handle Callback ===
const handleCallback = async (callback) => {
  const { CheckoutRequestID, ResultCode, ResultDesc } = callback;
  const { status, message } = getResultDetails(ResultCode);

  const existing = await MpesaTransaction.findOne({
    checkoutRequestID: CheckoutRequestID,
  });

  if (!existing) {
    throw new Error(`Callback for unknown CheckoutRequestID: ${CheckoutRequestID}`);
  }

  if (existing.status !== "pending") {
    // Ignore duplicate callbacks for completed transactions
    return { skipped: true };
  }

  await MpesaTransaction.updateOne(
    { checkoutRequestID: CheckoutRequestID },
    {
      status,
      resultCode: ResultCode,
      description: ResultDesc,
      message,
      timestamp: new Date(),
    }
  );

  return { skipped: false, status, message };
};

// === Get Payment Status ===
const getPaymentStatus = async (checkoutRequestID) => {
  const transaction = await MpesaTransaction.findOne({ checkoutRequestID });

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  return transaction;
};

module.exports = {
  initiateStkPush,
  handleCallback,
  getPaymentStatus,
};
