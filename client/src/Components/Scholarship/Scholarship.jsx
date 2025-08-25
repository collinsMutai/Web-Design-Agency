import React from 'react';
import './Scholarship.css';

const Scholarship = () => {
  return (
    <div className="scholarship-container">
      <header className="scholarship-header">
        <h1>TechFuture Scholarship Foundation</h1>
        <p>Empowering Tech Enthusiasts. Transforming Lives.</p>
      </header>
      
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          At TechFuture Scholarship Foundation, we believe that passion and talent should never be limited by finances.
        </p>
        <p>
          Whether you’re a college student in Kenya, a working professional looking to upskill, a self-employed creative, or someone unemployed but eager to learn, we’re here to help you unlock the power of technology and build a future you’re proud of.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To make world-class tech education affordable and accessible to anyone, anywhere — starting with a community of dreamers, doers, and innovators who are ready to transform their lives.
        </p>
      </section>

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
          <li>Pathways to freelancing, remote jobs, or starting your own projects</li>
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
          When you support TechFuture, you’re not just giving money — you’re changing someone’s life.
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
        <p>Together, we can turn passion into profession and dreamers into innovators.</p>
      </footer>
    </div>
  );
}

export default Scholarship;
