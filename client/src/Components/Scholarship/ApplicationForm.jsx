import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./ApplicationForm.css";
import Mentor from "../../Images/mentor.png";
import PayPal from "../../Images/paypallogo.png";
import Mpesa from "../../Images/mpesalogo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ApplicationForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Payment method state: 'mpesa' or 'paypal'
  const [paymentMethod, setPaymentMethod] = useState("");

  // Donation handlers
const handleMpesaDonate = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/mpesa/stkpush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 1,
        phone: "254726097666",
      }),
    });

    const data = await res.json();

    if (data?.data?.ResponseCode === "0") {
      alert("✅ Donation initiated. Check your phone to complete the payment.");

      const checkoutId = data.data.CheckoutRequestID;

      // Poll every 5 seconds for payment status
      const pollInterval = setInterval(async () => {
        const statusRes = await fetch(
          `http://localhost:5000/api/mpesa/status/${checkoutId}`
        );
        const statusData = await statusRes.json();

        if (statusData.status === "success") {
          clearInterval(pollInterval);
          alert("🎉 Payment successful! Thank you for your donation.");
        } else if (statusData.status === "failed") {
          clearInterval(pollInterval);
          alert(`❌ Payment failed: ${statusData.description}`);
        }

        // else still pending — do nothing
      }, 5000);
    } else {
      alert("❌ Donation failed to initiate.");
    }
  } catch (error) {
    console.error("Donation error:", error);
    alert("⚠️ Failed to initiate donation.");
  }
};


  const handlePaypalDonate = () => {
    window.location.href = "http://localhost:5000/api/paypal/donate";
  };

  const handleDonate = () => {
    if (paymentMethod === "mpesa") {
      handleMpesaDonate();
    } else if (paymentMethod === "paypal") {
      handlePaypalDonate();
    } else {
      alert("Please select a payment method first.");
    }
  };

  return (
    <>
      {/* Join the Movement Section */}
      <motion.div
        className="join-movement"
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="section-header">
          <h2>Join the Movement</h2>
          <p>Tech is the future — and the future needs you.</p>
        </div>

        <div className="join-container">
          {/* Left Column */}
          <motion.div variants={fadeInUp} className="join-text">
            <div className="contact-info">
              <h5>Contact Info</h5>
              <p>
                <i className="fa-solid fa-phone"></i> +1 (555) 123-4567
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> hello@futuretech.org
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i> 123 Innovation Way,
                Tech City, CA 90001
              </p>
            </div>

            <div className="join-section">
              <h5>Follow us for updates</h5>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>

            <div className="join-section">
              <h5>Donate to help others</h5>

              <div className="payment-options">
                <label className="payment-option" htmlFor="mpesa-radio">
                  <input
                    type="radio"
                    id="mpesa-radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={paymentMethod === "mpesa"}
                    onChange={() => setPaymentMethod("mpesa")}
                  />
                    {/* <span className="mpesa-button-text">Lipa na M‑Pesa</span> */}
                  <img
                    src={Mpesa}
                    alt="M-Pesa Logo"
                    className="mpesa-logo-img"
                  />
                </label>

                <label className="payment-option" htmlFor="paypal-radio">
                  <input
                    type="radio"
                    id="paypal-radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  <img
                    src={PayPal}
                    alt="PayPal Logo"
                    className="paypal-logo-img"
                  />
                  {/* <span className="paypal-button-text">
                    <span className="paypal-text-pay">Pay</span>
                    <span className="paypal-text-pal">Pal</span> Donate
                  </span> */}
                </label>
              </div>

              <button
                className="donate-button"
                onClick={handleDonate}
                disabled={!paymentMethod}
                style={{ marginTop: "15px" }}
              >
                Donate
              </button>
            </div>

            <p>Together, we turn dreamers into innovators.</p>
          </motion.div>

          {/* Right Column - Application Form */}
          <motion.div variants={fadeInUp} className="join-form">
            <h5>Apply Now</h5>
            <form>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email Address *" required />
              <input
                type="tel"
                placeholder="Phone Number *"
                pattern="[0-9]{10}"
                required
              />
              <textarea
                placeholder="Why do you want to join? *"
                rows="4"
                required
              ></textarea>
              <button type="submit">Apply Now</button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Volunteer Section */}
      <motion.div
        className="volunteer-container"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="volunteer-left">
          <div className="volunteer-heading-wrapper">
            <img
              src={Mentor}
              alt="Mentor illustration"
              className="volunteer-image"
            />
            <h5>Volunteer as a mentor</h5>
          </div>
        </div>

        <div className="volunteer-right">
          <form className="inline-form volunteer-form">
            <div className="input-with-button">
              <input
                name="email"
                type="email"
                placeholder="Enter your email:"
                required
              />
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ApplicationForm;
