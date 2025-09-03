import React from "react";
import { Link } from "react-router-dom";
import "./PaypalDonationFailure.css";

const PaypalDonationFailure = () => {
  return (
    <div className="paypal-donation-failure-container">
      <h2>Donation Cancelled</h2>
      <p>Your donation was cancelled or not completed. You can try again anytime.</p>
      <Link to="/scholarship-donations" className="donate-link">
        👉 Back to Donate
      </Link>
    </div>
  );
};

export default PaypalDonationFailure;
