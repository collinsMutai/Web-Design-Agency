import React, { forwardRef } from "react";
import "./HomeAbout.css";
import home_workplace_image from "../../Images/workplace2.jpeg";

const HomeAbout = forwardRef((props, ref) => {
  return (
    <div className="main-container" ref={ref}> {/* 👈 Attach ref here */}
      <div className="container">
        <div className="left">
          <h3>Digital consulting</h3>
          <h2>Tailored digital solutions for your business</h2>
          <h3>About Us</h3>
          <p>
            Welcome to Collinsfrontend, where passion meets innovation in the
            world of web design and full-stack web development. Our journey
            began with a simple idea: to transform our clients' visions into
            engaging, functional, and beautifully crafted websites. <br /><br />
            Today, we take pride in being a dynamic team of web design
            experts dedicated to pushing the boundaries of digital design and
            technology...
          </p>

          <ul className="skills">
            <div className="skills-left">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 arrow-right">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                WordPress
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 arrow-right">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                React
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 arrow-right">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                Angular
              </li>
            </div>
            <div className="skills-right">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 arrow-right">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                NodeJS
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 arrow-right">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                Express
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 arrow-right">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                MongoDB
              </li>
            </div>
          </ul>
        </div>
        <div className="right">
          <img src={home_workplace_image} alt="Workplace" />
        </div>
      </div>
    </div>
  );
});

export default HomeAbout;
