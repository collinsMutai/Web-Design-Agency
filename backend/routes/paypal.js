const express = require("express");
const router = express.Router();
const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");
require("dotenv").config();

// Determine environment based on NODE_ENV
const isProduction = process.env.NODE_ENV === "production";
const PAYPAL_MODE = isProduction ? "live" : "sandbox";

// Select environment class
const Environment = PAYPAL_MODE === "live"
  ? checkoutNodeJssdk.core.LiveEnvironment
  : checkoutNodeJssdk.core.SandboxEnvironment;

// Select credentials dynamically
const clientId = PAYPAL_MODE === "live"
  ? process.env.PAYPAL_LIVE_CLIENT_ID
  : process.env.PAYPAL_SANDBOX_CLIENT_ID;

const clientSecret = PAYPAL_MODE === "live"
  ? process.env.PAYPAL_LIVE_CLIENT_SECRET
  : process.env.PAYPAL_SANDBOX_CLIENT_SECRET;

const paypalClient = new checkoutNodeJssdk.core.PayPalHttpClient(
  new Environment(clientId, clientSecret)
);

// === /api/paypal/donate ===
router.post("/donate", async (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    return res.status(400).json({ error: "Invalid donation amount" });
  }

  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");

  const returnUrls = process.env.PAYPAL_RETURN_URL.split(",");
  const cancelUrls = process.env.PAYPAL_CANCEL_URL.split(",");

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: amount.toString(),
        },
      },
    ],
    application_context: {
      brand_name: "YourOrganizationName",
      landing_page: "LOGIN",
      user_action: "PAY_NOW",
      return_url: isProduction ? returnUrls[0] : returnUrls[1],
      cancel_url: isProduction ? cancelUrls[0] : cancelUrls[1],
    },
  });

  try {
    const order = await paypalClient.execute(request);
    
    // ✅ Return the orderID to frontend
    res.json({ orderID: order.result.id });

  } catch (err) {
    console.error("PayPal donation error:", err);
    res.status(500).json({ error: "Failed to create PayPal order" });
  }
});


// Capture PayPal payment
router.post("/capture", async (req, res) => {
  const { orderID } = req.body;

  if (!orderID) {
    return res.status(400).json({ error: "Missing order ID" });
  }

  const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await paypalClient.execute(request);
    res.json({
      success: true,
      captureID: capture.result.id,
      status: capture.result.status,
      details: capture.result,
    });
  } catch (err) {
    console.error("PayPal capture error:", err);
    res.status(500).json({ error: "Failed to capture payment" });
  }
});

module.exports = router;
