// AboutUs.js
import React from "react";
import "./AboutUs.css"; // New CSS file for AboutUs styles
import AboutUsImage from "../../Images/hero3.jpeg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="who-we-are">
        <div className="who-we-are-content">
          <div className="image">
            <img src={AboutUsImage} alt="TechFuture" />
          </div>
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              At TechFuture Scholarship Foundation, we believe that passion and
              talent should never be limited by finances.
            </p>
            <p>
              Whether you’re a college student in Kenya, a working professional
              looking to upskill, a self-employed creative, or someone
              unemployed but eager to learn, we’re here to help you unlock the
              power of technology and build a future you’re proud of.
            </p>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To make world-class tech education affordable and accessible to
          anyone, anywhere — starting with a community of dreamers, doers, and
          innovators who are ready to transform their lives.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
