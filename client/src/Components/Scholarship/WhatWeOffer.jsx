import React from 'react';
import './WhatWeOffer.css'; // Import the new CSS file

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer">
      <h2>What We Offer</h2>
      <div className="offer-list">
        <div className="offer-item">
          <h3>Sponsored Learning</h3>
          <p>
            Through generous PayPal donations, we sponsor access to affordable, high-quality courses from platforms like:
            <ul>
              <li>Udemy – for beginners and career changers</li>
              <li>Moringa School – hands-on, career-ready bootcamps</li>
              <li>ALX Africa – intensive programs for future software engineers and tech leaders</li>
            </ul>
          </p>
        </div>
        <div className="offer-item">
          <h3>Tailored Learning Paths</h3>
          <p>Choose your own journey — we’ll support you every step of the way:</p>
          <ul>
            <li>Full-Stack Web Development</li>
            <li>Mobile App Development</li>
            <li>DevOps & Cloud Engineering</li>
            <li>Digital Marketing & SEO</li>
            <li>Machine Learning & AI</li>
            <li>Blockchain & Web3</li>
            <li>UI/UX Design</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="offer-item">
          <h3>Equipment Support</h3>
          <p>
            No laptop? No problem. If you show commitment and passion, we’ll help provide the tools you need to learn and grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
