// src/Components/DonationSuccess/DonationSuccess.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./PaypalDonationSuccess.css"; // Optional: if you want to style it

const DonationSuccess = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("Capturing your donation...");

  const orderID = searchParams.get("token"); // This is the PayPal Order ID

  useEffect(() => {
    const captureDonation = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/paypal/capture", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderID }),
        });

        const data = await res.json();

        if (data.success) {
          setStatus("success");
          setMessage(`🎉 Thank you! Your donation was captured successfully. Transaction ID: ${data.captureID}`);
        } else {
          setStatus("failed");
          setMessage("⚠️ Donation was approved but could not be captured.");
        }
      } catch (error) {
        console.error("Donation capture failed:", error);
        setStatus("error");
        setMessage("🚫 An error occurred while capturing your donation.");
      }
    };

    if (orderID) {
      captureDonation();
    } else {
      setStatus("missing");
      setMessage("❌ Missing order ID in the URL.");
    }
  }, [orderID]);

  return (
    <div className={`donation-success-container status-${status}`}>
      <h2>Donation Confirmation</h2>
      <p>{message}</p>
    </div>
  );
};

export default DonationSuccess;
