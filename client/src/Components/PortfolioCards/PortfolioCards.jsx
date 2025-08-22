import React from "react";
import "./PortfolioCards.css";
import Techsergeanttechnologies from "../../Images/Techsergeanttechnologies.jpg";
import Novelcoffee from "../../Images/Novelcoffee.jpg";
import Bellpowerinternational from "../../Images/Bellpowerinternational.jpg";
import SSBgroup from "../../Images/SSBgroup.jpg";
import Jambosafariafrica from "../../Images/Jambosafariafrica.jpg";
import HCcarwash from "../../Images/HCcarwash.jpg";

const portfolioData = [
  {
    id: 1,
    image: Techsergeanttechnologies,
    title: "Tech Sergeant Technologies",
    category: "Angular",
    url: "https://techsergeanttechnologies.com/",
  },
  {
    id: 2,
    image: Novelcoffee,
    title: "Novel Coffee",
    category: "Angular",
    url: "https://novelcoffeellc.com/",
  },
  {
    id: 3,
    image: Bellpowerinternational,
    title: "Bell Power International",
    category: "Angular",
    url: "https://bellpowerinternational.com/",
  },
  {
    id: 4,
    image: SSBgroup,
    title: "SSB Group",
    category: "Angular",
    url: "https://ssbgroupllc.com/",
  },
  {
    id: 5,
    image: Jambosafariafrica,
    title: "Jambo Safari Africa",
    category: "Angular",
    url: "https://www.jambosafariafrica.com/",
  },
  {
    id: 6,
    image: HCcarwash,
    title: "H&C Carwash",
    category: "Angular, NodeJS",
    url: "https://jupscarwash.onrender.com/",
  },
];

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
      <div className="container">
        <div className="row">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" // Responsive grid classes from Bootstrap
            >
              <div className="item">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="item-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                </a>
                <div className="content">
                  <h6>{item.title}</h6>
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;
