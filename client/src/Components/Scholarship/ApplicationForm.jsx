import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ApplicationForm.css";
import Mentor from "../../Images/mentor.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ApplicationForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // 🚀 Donation handler
const handleDonate = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/mpesa/stkpush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 1, // donation amount in KES
        phone: "254726097666", // phone in international format (e.g., 2547xxxxxxx)
      }),
    });

    const data = await res.json();

    if (data.ResponseCode === "0") {
      alert("✅ Donation initiated. Check your phone to complete the payment.");
    } else {
      alert("❌ Donation failed to initiate.");
    }
  } catch (error) {
    console.error("Donation error:", error);
    alert("⚠️ Failed to initiate donation.");
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
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
              </div>
            </div>

            <div className="join-section">
              <h5>Donate to help others</h5>
              <button className="donate-button" onClick={handleDonate}>
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
