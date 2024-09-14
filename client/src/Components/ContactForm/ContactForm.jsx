// import React, { useState, useRef } from "react";
// import "./ContactForm.css";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const SERVICE_ID = process.env.REACT_APP_API_SERVICE_ID;
//     const TEMPLATE_ID = process.env.REACT_APP_API_TEMPLATE_ID;
//     const PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY;
//     // const SERVICE_ID = "service_h393bwf";
//     // const TEMPLATE_ID = "template_n0a81g7";
//     // const PUBLIC_KEY = "R6ZgSLMEaBK549gOt";

//     emailjs
//       .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
//         publicKey: PUBLIC_KEY,
//       })
//       .then(
//         () => {
//           form.current.reset()
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <div className="contactform-container">
//       <h2 className="recent-projects">Contact Us</h2>
//       <div className="info">
//         <div className="form">
//           <h3>Send A Message</h3>
//           <form ref={form} onSubmit={handleSubmit}>
//             <input name="user_name" type="text" placeholder="Name" />
//             <input type="text" name="user_phone" placeholder="Phone" />
//             <input type="text" name="user_email" placeholder="Email" />
//             <textarea name="message" placeholder="Message" rows={5} />
//             <button type="submit">Send</button>
//           </form>
//         </div>
//         <div className="contact-info">
//           <h3>Contact Information</h3>
//           <div className="item">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
//             >
//               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//               <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
//             </svg>
//             <p>Phone: +254 726 097 666</p>
//           </div>
//           <div className="item">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
//             >
//               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//               <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
//               <path d="M3 7l9 6l9 -6" />
//             </svg>
//             <p>Email: info@collinsfrontend.com</p>
//           </div>
//           <div className="item">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
//             >
//               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//               <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
//             </svg>
//             <p>Nairobi, Kenya.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setMessage("Please complete the reCAPTCHA.");
      return;
    }

    setIsSending(true);

    const SERVICE_ID = process.env.REACT_APP_API_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_API_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setMessage("Your message has been sent successfully!");
          form.current.reset(); // Reset form fields
          recaptchaRef.current.reset(); // Reset the reCAPTCHA widget
          setCaptchaValue(null);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setMessage("Failed to send your message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="contactform-container">
      <h2 className="recent-projects">Contact Us</h2>
      <div className="info">
        <div className="form">
          <h3>Send A Message</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <input name="user_name" type="text" placeholder="Name" required />
            <input name="user_phone" type="text" placeholder="Phone" />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
            />
            <textarea name="message" placeholder="Message" rows={5} required />
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Use environment variable
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
          {message && <p className="message">{message}</p>}
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
              className="icon icon-tabler icon-tabler-phone"
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
              className="icon icon-tabler icon-tabler-mail"
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
              className="icon icon-tabler icon-tabler-map-pin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
            </svg>
            <p>Nairobi, Kenya.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
