import React, { useState } from "react";
import "./PortfolioCards.css";

import Techsergeanttechnologies from "../../Images/Techsergeanttechnologies.jpg";
import Novelcoffee from "../../Images/Novelcoffee.jpg";
import Bellpowerinternational from "../../Images/Bellpowerinternational.jpg";
import SSBgroup from "../../Images/SSBgroup.jpg";
import Jambosafariafrica from "../../Images/Jambosafariafrica.jpg";
import HCcarwash from "../../Images/HCcarwash.jpg";
import Africansaharalogistics from "../../Images/Africansaharalogistics.jpg";
import Leempirecleaningservices from "../../Images/Leempirecleaningservices.jpg";
import Thewisebuilders from "../../Images/Thewisebuilders.jpg";

const portfolioData = [
  {
    id: 1,
    image: Techsergeanttechnologies,
    title: "Tech Sergeant Technologies",
    category: "Angular",
    type: "Web development",
    url: "https://techsergeanttechnologies.com/",
  },
  {
    id: 2,
    image: Novelcoffee,
    title: "Novel Coffee",
    category: "Angular",
    type: "Web design",
    url: "https://novelcoffeellc.com/",
  },
  {
    id: 3,
    image: Bellpowerinternational,
    title: "Bell Power International",
    category: "Angular",
    type: "Web development",
    url: "https://bellpowerinternational.com/",
  },
  {
    id: 4,
    image: SSBgroup,
    title: "SSB Group",
    category: "Angular",
    type: "Web design",
    url: "https://ssbgroupllc.com/",
  },
  {
    id: 5,
    image: Jambosafariafrica,
    title: "Jambo Safari Africa",
    category: "Angular",
    type: "Web design",
    url: "https://www.jambosafariafrica.com/",
  },
  {
    id: 6,
    image: HCcarwash,
    title: "H&C Carwash",
    category: "Angular, NodeJS",
    type: "Web development",
    url: "https://jupscarwash.onrender.com/",
  },
  {
    id: 7,
    image: Africansaharalogistics,
    title: "African Sahara Logistics",
    category: "Angular",
    type: "Graphic design",
    url: "https://africsahara.com/",
  },
  {
    id: 8,
    image: Leempirecleaningservices,
    title: "LeEmpire Cleaning Services",
    category: "Angular",
    type: "Web design",
    url: "https://leempirecleaningservices.com/",
  },
  {
    id: 9,
    image: Thewisebuilders,
    title: "The Wise Builders",
    category: "Angular",
    type: "Graphic design",
    url: "https://thewisebuilders.org/",
  },
];

const PortfolioCards = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (type) => {
    setSelectedFilter(type);
  };

  const filteredData =
    selectedFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.type === selectedFilter);

  const filterOptions = ["All", "Web design", "Web development", "Graphic design"];

  return (
    <div className="portfolio-cards-container">
      <h2 className="recent-projects">Recent Projects</h2>
      <div className="portfolio-filter">
        <div>
          {filterOptions.map((type) => (
            <span
              key={type}
              onClick={() => handleFilterClick(type)}
              className={selectedFilter === type ? "active-filter" : ""}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
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
