import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = React.forwardRef((props, ref) => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_API_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_API_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY;
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const showToast = (message, type = "success") => {
    toast[type](message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const userName = form.current.user_name.value.trim();
    const userPhone = form.current.user_phone.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Validate fields
    if (!userName || !userPhone || !userEmail || !message) {
      showToast("Please fill out all required fields.", "error");
      setIsSending(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      showToast("Please enter a valid email address.", "error");
      setIsSending(false);
      return;
    }

    const phoneRegex = /^[+\d]?(?:[\d-.\s()]*)$/;
    if (!phoneRegex.test(userPhone)) {
      showToast("Please enter a valid phone number.", "error");
      setIsSending(false);
      return;
    }

    // Get reCAPTCHA token
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      showToast("Please complete the reCAPTCHA.", "error");
      setIsSending(false);
      return;
    }

    // Send email with EmailJS
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        showToast("Your message has been sent successfully!", "success");
        form.current.reset();
        recaptchaRef.current.reset(); // reset reCAPTCHA
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        showToast(
          "Failed to send your message. Please try again later.",
          "error"
        );
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="contactform-container" ref={ref} id="contact">
      <h2 className="recent-projects">Contact Us</h2>

      <div className="info">
        <div className="form">
          <h3>Send A Message</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <input name="to_name" type="hidden" value="Collins Frontend" />
            <input name="user_name" type="text" placeholder="Name" required />
            <input name="user_phone" type="tel" placeholder="Phone" required />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
            />

            {RECAPTCHA_SITE_KEY ? (
              <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} ref={recaptchaRef} />
            ) : (
              <p style={{ color: "red" }}>reCAPTCHA site key not loaded</p>
            )}

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="item">
            <p>Phone: +254 726 097 666</p>
          </div>
          <div className="item">
            <p>Email: info@collinsfrontend.com</p>
          </div>
          <div className="item">
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        rtl={false}
      />
    </div>
  );
});

export default ContactForm;
