const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const {
  initiateStkPush,
  handleCallback,
  getPaymentStatus,
} = require("../services/mpesaService");

const logger = require("../utils/logger");
const { verifyGuestToken } = require("../utils/jwt"); // ✅ import middleware

// === STK Push Rate Limiter ===
const stkPushLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: "Too many STK push requests. Please try again later.",
  },
});

// === STK Push Route (Protected with JWT and Rate Limiter) ===
router.post("/stkpush", verifyGuestToken, stkPushLimiter, async (req, res) => {
  const { phone, amount } = req.body;

  try {
    const data = await initiateStkPush({ phone, amount });

    logger.info("✅ STK Push Request", {
      phone,
      amount,
      checkoutRequestID: data.CheckoutRequestID,
    });

    return res.status(200).json({
      success: true,
      message: data.CustomerMessage,
      checkoutRequestID: data.CheckoutRequestID,
    });
  } catch (error) {
    logger.error("❌ STK Push Error", { error: error.message, phone, amount });

    return res.status(500).json({
      success: false,
      message: "STK Push failed. Please try again.",
    });
  }
});

// === M-PESA Callback Route (No Auth Needed) ===
router.post("/callback", async (req, res) => {
  const callback = req.body?.Body?.stkCallback;

  if (!callback) {
    logger.warn("⚠️ Invalid callback structure received", req.body);
    return res.status(400).json({ message: "Invalid callback structure" });
  }

  try {
    const result = await handleCallback(callback);

    if (result?.skipped) {
      logger.info("⏩ Duplicate callback ignored", {
        checkoutRequestID: callback.CheckoutRequestID,
      });

      return res.status(200).json({ message: "Duplicate callback ignored" });
    }

    logger.info("✅ Callback processed", {
      checkoutRequestID: callback.CheckoutRequestID,
    });

    return res.status(200).json({ message: "Callback received successfully" });
  } catch (error) {
    logger.error("❌ Callback update error", {
      error: error.message,
      checkoutRequestID: callback.CheckoutRequestID,
    });

    return res.status(500).json({ message: "Failed to process callback" });
  }
});

// === GET Payment Status Route (Optional: protect with verifyGuestToken) ===
router.get("/status/:checkoutId", verifyGuestToken, async (req, res) => {
  const { checkoutId } = req.params;

  try {
    const transaction = await getPaymentStatus(checkoutId);

    logger.info("📦 Payment status fetched", { checkoutRequestID: checkoutId });

    return res.json(transaction);
  } catch (error) {
    logger.warn("⚠️ No transaction found", { checkoutRequestID: checkoutId });

    return res.status(404).json({
      status: "unknown",
      message: "No transaction found with that CheckoutRequestID",
    });
  }
});

module.exports = router;
