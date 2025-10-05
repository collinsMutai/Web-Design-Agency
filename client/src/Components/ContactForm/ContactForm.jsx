import React, { useRef, useState, useEffect } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = React.forwardRef((props, ref) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_API_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_API_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY;
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  // Load reCAPTCHA v2 script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const showToast = (message, type = "success") => {
    toast[type](message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const userName = form.current.user_name.value;
    const userPhone = form.current.user_phone.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

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

    // Get reCAPTCHA v2 token value
    const recaptchaResponse = document.querySelector('[name="g-recaptcha-response"]')?.value;

    if (!recaptchaResponse) {
      showToast("Please complete the reCAPTCHA.", "error");
      setIsSending(false);
      return;
    }

    // Send email with emailjs
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        showToast("Your message has been sent successfully!", "success");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        showToast("Failed to send your message. Please try again later.", "error");
      })
      .finally(() => {
        setIsSending(false);
      });
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
            <textarea name="message" placeholder="Message" rows={5} required />
            <div
              className="g-recaptcha"
              data-sitekey={RECAPTCHA_SITE_KEY}
            ></div>

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <p>Phone: +254 726 097 666</p>
          </div>
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <p>Email: info@collinsfrontend.com</p>
          </div>
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
            >
              <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
            </svg>
            <p>Nairobi, Kenya.</p>
          </div>
        </div>
      </div>

      {/* Toast container */}
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
