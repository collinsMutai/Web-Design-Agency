import React from "react";
import "./WhatWeOffer.css"; // Import custom CSS for image and text styling

const WhatWeOffer = () => {
  return (
    <section className="offer-section" >
      <h2 className="offer-title">What We Offer</h2>
      <div className="offer-card-container">
        <div className="offer-card-item">
          <div className="offer-card">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg"
              className="offer-card-img"
              alt="Sponsored Learning"
            />
            <div className="offer-card-body">
              <h5 className="offer-card-title">Sponsored Learning</h5>
              <div className="offer-card-text">
                <p>
                  Through generous PayPal donations, we sponsor access to
                  affordable, high-quality courses from platforms like:
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Udemy – for beginners
                    and career changers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Moringa School –
                    hands-on, career-ready bootcamps
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> ALX Africa – intensive
                    programs for future software engineers and tech leaders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="offer-card-item">
          <div className="offer-card">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg"
              className="offer-card-img"
              alt="Tailored Learning Paths"
            />
            <div className="offer-card-body">
              <h5 className="offer-card-title">Tailored Learning Paths</h5>
              <div className="offer-card-text">
                Choose your own journey — we’ll support you every step of the
                way:
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Full-Stack Web
                    Development
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Mobile App Development
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> DevOps & Cloud
                    Engineering
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Digital Marketing &
                    SEO
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Machine Learning & AI
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Blockchain & Web3
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> UI/UX Design
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Graphic Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="offer-card-item">
          <div className="offer-card">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/02/18/29/laptop-2572772_1280.jpg"
              className="offer-card-img"
              alt="Equipment Support"
            />
            <div className="offer-card-body">
              <h5 className="offer-card-title">Equipment Support</h5>
              <div className="offer-card-text">
                No laptop? No problem. If you show commitment and passion, we’ll
                help provide the tools you need to learn and grow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
