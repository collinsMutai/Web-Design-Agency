import React from "react";
import "./Header.css";

const Header = ({ title, description }) => {
  return (
    <div className="header-container">
      <h1>{title}</h1>
      {/* <p>{description}</p> */}
      {/* Breadcrumbs Navigation */}
      <nav className="breadcrumbs">
        <a href="/" className="breadcrumb-item">
          <i className="fas fa-home"></i>Home  {/* Home Icon */}
        </a>
        <span className="breadcrumb-separator">
        <i className="fas fa-chevron-right"></i> {/* Forward Chevron Icon */}
        </span>
        <span className="breadcrumb-item">Scholarship</span>
      </nav>
    </div>
  );
};

export default Header;
