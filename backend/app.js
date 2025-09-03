const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pesapalRoutes = require('./routes/pesapal');
const mpesaRoutes = require("./routes/mpesa");
const paypalRoutes = require('./routes/paypal');



const app = express();

// ✅ CORS setup with headers
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // if using cookies or sessions
}));

// ✅ Custom Headers Middleware
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
app.use("/api/mpesa", mpesaRoutes);
app.use("/api/paypal", paypalRoutes);



// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
