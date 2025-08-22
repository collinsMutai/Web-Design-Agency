import React, { useContext, useRef } from "react";
import "./Cta.css";
import home_workplace_image from "../../Images/workplace4.jpeg";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";

const Cta = () => {
  const { pathName, top, setTop } = useContext(AppContext);
  
  const contactFormRef = useRef(null);

  // Update the top value based on the current path
  if (pathName === "/") {
    setTop(3190);
  }
  if (pathName === "/portfolio") {
    setTop(450);
  }

  // Function to handle scrolling to the contact form
  const handleScrollToContact = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="cta-container"
      style={{
        backgroundImage: `url(${home_workplace_image})`,
        backgroundSize: "cover",
        height: "50%",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        backgroundPosition: "center center",
        opacity: "0.9",
        top: `${top}px`,
      }}
    >
      <div className="text">
        <h2>Let's Talk</h2>
        <h2 className="cta-h2-one">About Your</h2>
        <h2 className="cta-h2-two">Next Project</h2>
      </div>
      {/* Button to scroll to contact form */}
      <button onClick={handleScrollToContact}>Get in touch</button>
    </div>
  );
};

export default Cta;
