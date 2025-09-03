const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const pesapalRoutes = require('./routes/pesapal');
const mpesaRoutes = require('./routes/mpesa');
const paypalRoutes = require('./routes/paypal');

const app = express();

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ CORS setup
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// ✅ Headers middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(express.json());

// ✅ Routes
app.use('/api/pesapal', pesapalRoutes);
app.use('/api/mpesa', mpesaRoutes);
app.use('/api/paypal', paypalRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
