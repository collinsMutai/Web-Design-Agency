import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contactform-container">
      <h2 className="recent-projects">Contact Us</h2>
      <div className="info">
        <div className="form">
          <h3>Send A Message</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message" rows={5} />
            <button type="button">Send</button>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <p>Email: info@collinsfrontend.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
