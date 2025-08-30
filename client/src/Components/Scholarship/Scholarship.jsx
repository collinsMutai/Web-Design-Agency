// Scholarship.js
import React from "react";
import "./Scholarship.css";
import WhatWeOffer from "./WhatWeOffer"; // Import the WhatWeOffer component
import AboutUs from "./AboutUs"; // Import the AboutUs component
import Header from "../Header/Header";

const Scholarship = () => {
  return (
    <>
      <Header
        title="Tech Scholarship"
        description="Empowering Tech Enthusiasts. Transforming Lives."
      />
      <div className="scholarship-container">
        <AboutUs /> {/* Render AboutUs component here */}
        <WhatWeOffer /> {/* Render WhatWeOffer component here */}
        <section className="who-can-apply">
          <h2>Who Can Apply</h2>
          <p>
            Our doors are open to:
            <ul>
              <li>Students preparing for their future</li>
              <li>Working professionals seeking new skills</li>
              <li>Unemployed individuals ready to restart their careers</li>
              <li>Self-employed entrepreneurs who want to innovate in tech</li>
            </ul>
            All you need is dedication, curiosity, and the drive to learn.
          </p>
        </section>
        <section className="why-choose">
          <h2>Why Choose TechFuture</h2>
          <ul>
            <li>Affordable, high-impact learning</li>
            <li>Mentorship and community support</li>
            <li>Practical skills for global opportunities</li>
            <li>
              Pathways to freelancing, remote jobs, or starting your own
              projects
            </li>
          </ul>
        </section>
        <section className="how-we-fund">
          <h2>How We Fund the Program</h2>
          <p>
            Every PayPal donation goes directly toward:
            <ul>
              <li>Paying for learners’ tuition</li>
              <li>Providing laptops or essential tools</li>
              <li>Offering access to premium learning resources</li>
            </ul>
            When you support TechFuture, you’re not just giving money — you’re
            changing someone’s life.
          </p>
        </section>
        <section className="how-to-apply">
          <h2>How to Apply</h2>
          <p>Complete our online application (coming soon)</p>
          <p>Tell us your story and your goals</p>
          <p>Begin your learning journey with personalized guidance</p>
        </section>
        <footer className="join-movement">
          <h2>Join the Movement</h2>
          <p>Tech is the future — and the future needs you.</p>
          <ul>
            <li>Follow us for updates and opportunities</li>
            <li>Volunteer as a mentor or trainer</li>
            <li>Donate and help create the next generation of tech leaders</li>
          </ul>
          <p>
            Together, we can turn passion into profession and dreamers into
            innovators.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Scholarship;
