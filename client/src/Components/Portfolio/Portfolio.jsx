import React from "react";
import "./Portfolio.css";
import Cta from "../Cta/Cta";
import Header from "../Header/Header";
import PortfolioCards from "../PortfolioCards/PortfolioCards";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container">
        <Header
          title="Recent Projects"
          description="Browse through my portfolio to see some of my latest projects."
        />
        <PortfolioCards />
      </div>
      {/* <Cta /> */}
    </>
  );
};

export default Portfolio;
