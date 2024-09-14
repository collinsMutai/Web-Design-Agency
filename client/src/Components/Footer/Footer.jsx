import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      {/* <div className="contact-details">
        <h2 className="footer-title">Contact Us</h2>
        <div className="list-items">
          <ul>
            <li>
              <span className="contact-us-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>
              <div>
                <span className="text">Address</span>
                <h4>Nairobi, Kenya</h4>
              </div>
            </li>
            <li>
              <span className="contact-us-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <div>
                <span className="text">Email</span>
                <h4>info@collinsfrontend.com</h4>
              </div>
            </li>
            <li>
              <span className="contact-us-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              <div>
                <span className="text">Phone</span>
                <h4>+254 726 097 666</h4>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div className="menu-links">
        <h2 className="footer-title">Menu</h2>
        <div className="list-items">
          <ul className="text">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Donations</li>
          </ul>
        </div>
      </div> */}
      {/* <div className="social-links">
        <h2 className="footer-title">Get Social</h2>
        <div className="social-icons">
          <SocialIcon
            className="social-icon"
            bgColor="#0c0f16"
            url="www.github.com"
          />
          <SocialIcon
            className="social-icon"
            bgColor="#0c0f16"
            url="www.linkedin.com"
          />
          <SocialIcon
            className="social-icon"
            bgColor="#0c0f16"
            url="www.instagram.com"
          />
          <SocialIcon
            className="social-icon"
            bgColor="#0c0f16"
            url="www.facebook.com"
          />
        </div>
      </div> */}
      <h4 className="copyright">© {currentYear}. Collinsfrontend.</h4>
    </div>
  );
};

export default Footer;
