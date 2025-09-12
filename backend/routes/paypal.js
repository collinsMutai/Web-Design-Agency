const express = require("express");
const router = express.Router();
const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");
require("dotenv").config();

// === PayPal Client Configuration ===
const Environment = process.env.PAYPAL_MODE === "live"
  ? checkoutNodeJssdk.core.LiveEnvironment
  : checkoutNodeJssdk.core.SandboxEnvironment;

const paypalClient = new checkoutNodeJssdk.core.PayPalHttpClient(
  new Environment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  )
);


// === /api/paypal/donate ===
router.get("/donate", async (req, res) => {
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "5.00",
        },
      },
    ],
    application_context: {
      brand_name: "YourOrganizationName",
      landing_page: "LOGIN",
      user_action: "PAY_NOW",
      return_url: process.env.PAYPAL_RETURN_URL,
      cancel_url: process.env.PAYPAL_CANCEL_URL,
    },
  });

  try {
    const order = await paypalClient.execute(request);
    const approvalUrl = order.result.links.find(
      (link) => link.rel === "approve"
    ).href;
    res.redirect(approvalUrl);
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
