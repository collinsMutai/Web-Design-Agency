import React from "react";
import "./PortfolioCards.css";
import fitbit from "../../Images/fitbit.png";
import hrjobboard from "../../Images/hr-job-board.png";

const PortfolioCards = () => {
  return (
    <div className="portfolio-cards-container">
      <div className="portfolio-filter">
        <div>
          <span>All</span>
          <span>Web design</span>
          <span>Web development</span>
          <span>Graphic design</span>
        </div>
      </div>
      <div className="gallery">
        <div className="item">
          <a
            href="https://fitbit.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-img">
              <img src={fitbit} alt="" />
            </div>
          </a>
          <div className="content">
            <h6>Fitbit</h6>
            <span>React</span>
          </div>
        </div>
        <div className="item">
          <a
            href="https://hr-board.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-img">
              <img src={hrjobboard} alt="" />
            </div>
          </a>
          <div className="content">
            <h6>HR Job Board</h6>
            <span>Angular</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;
