import React from "react";
import "./Header.css";

const Header = ({ title, description }) => {
  return (
    <div className="header-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Header;
