const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const consumer_key = process.env.PESAPAL_CONSUMER_KEY;
const consumer_secret = process.env.PESAPAL_CONSUMER_SECRET;

// Base URLs
const BASE_URL = 'https://cybqa.pesapal.com/pesapalv3';
let access_token = null;

// Step 1: Get Access Token
async function getAccessToken() {
  const response = await axios.post(`${BASE_URL}/api/Auth/RequestToken`, {
    consumer_key,
    consumer_secret,
  });
  return response.data.token;
}

// Step 2: Handle donation route
router.post('/donate', async (req, res) => {
  const { amount, firstName, lastName, email, phone } = req.body;

  try {
    if (!access_token) access_token = await getAccessToken();

    const response = await axios.post(
      `${BASE_URL}/api/Transactions/SubmitOrderRequest`,
      {
        id: `donation-${Date.now()}`,
        currency: 'KES',
        amount,
        description: 'Donation',
        callback_url: 'http://localhost:3000/thank-you',
        notification_id: '', // Optional
        billing_address: {
          email_address: email,
          phone_number: phone,
          first_name: firstName,
          last_name: lastName,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    res.json({ redirect_url: response.data.redirect_url });
  } catch (error) {
    console.error('Pesapal Donation Error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to initiate donation' });
  }
});

module.exports = router;
