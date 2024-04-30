import React from "react";
import "./Portfolio.css";
import Cta from "../Cta/Cta";
import Header from "../Header/Header";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container">
        <Header />
        <h1>Portfolio</h1>
      </div>
      <Cta />
    </>
  );
};

export default Portfolio;
