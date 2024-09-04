import React, { useContext } from "react";
import "./Cta.css";
import home_workplace_image from "../../Images/workplace4.jpeg";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";

const Cta = () => {
  const { pathName, top, setTop } = useContext(AppContext);

  if (pathName === "/") {
    setTop(3190);
  }
  if (pathName === "/portfolio") {
    setTop(450);
  }
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
      <Link to={"#"}>
        <button>Get in touch</button>
      </Link>
    </div>
  );
};

export default Cta;
