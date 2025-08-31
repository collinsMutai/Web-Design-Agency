import React from "react";
import "./ScholarshipDetails.css";

const ScholarshipDetails = () => {
  return (
    <>
      <div className="scholarship-grid-wrapper">
        <h2 className="scholarship-heading">Scholarship Details</h2>
        <div className="scholarship-grid">
          <section className="who-can-apply">
            <h5>Who Can Apply</h5>
            <p>
              Our doors are open to:
              <ul>
                <li><i className="fa-solid fa-check"></i> Students preparing for their future</li>
                <li><i className="fa-solid fa-check"></i> Working professionals seeking new skills</li>
                <li><i className="fa-solid fa-check"></i> Unemployed individuals ready to restart their careers</li>
                <li><i className="fa-solid fa-check"></i> Self-employed entrepreneurs who want to innovate in tech</li>
              </ul>
              All you need is dedication, curiosity, and the drive to learn.
            </p>
          </section>

          <section className="why-choose">
            <h5>Why Choose TechFuture</h5>
            <ul>
              <li><i className="fa-solid fa-check"></i> Affordable, high-impact learning</li>
              <li><i className="fa-solid fa-check"></i> Mentorship and community support</li>
              <li><i className="fa-solid fa-check"></i> Practical skills for global opportunities</li>
              <li><i className="fa-solid fa-check"></i> Pathways to freelancing, remote jobs, or starting your own projects</li>
            </ul>
          </section>

          <section className="how-we-fund">
            <h5>How We Fund the Program</h5>
            <p>
              Every PayPal donation goes directly toward:
              <ul>
                <li><i className="fa-solid fa-check"></i> Paying for learners’ tuition</li>
                <li><i className="fa-solid fa-check"></i> Providing laptops or essential tools</li>
                <li><i className="fa-solid fa-check"></i> Offering access to premium learning resources</li>
              </ul>
              When you support TechFuture, you’re not just giving money — you’re
              changing someone’s life.
            </p>
          </section>

          <section className="how-to-apply">
            <h5>How to Apply</h5>
            <p><i className="fa-solid fa-check"></i> Complete our online application (coming soon)</p>
            <p><i className="fa-solid fa-check"></i> Tell us your story and your goals</p>
            <p><i className="fa-solid fa-check"></i> Begin your learning journey with personalized guidance</p>
          </section>
        </div>
      </div>

      <footer className="join-movement">
        <h5>Join the Movement</h5>
        <p>Tech is the future — and the future needs you.</p>
        <ul>
          <li><i className="fa-solid fa-check"></i> Follow us for updates and opportunities</li>
          <li><i className="fa-solid fa-check"></i> Volunteer as a mentor or trainer</li>
          <li><i className="fa-solid fa-check"></i> Donate and help create the next generation of tech leaders</li>
        </ul>
        <p>
          Together, we can turn passion into profession and dreamers into
          innovators.
        </p>
      </footer>
    </>
  );
};

export default ScholarshipDetails;
