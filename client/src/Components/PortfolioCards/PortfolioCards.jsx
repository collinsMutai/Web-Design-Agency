import React, { useState, useEffect, useRef, forwardRef} from "react";
import "./PortfolioCards.css";

// Import your images here (you already have this part)
import Techsergeanttechnologies from "../../Images/Techsergeanttechnologies.jpg";
import Novelcoffee from "../../Images/Novelcoffee.jpg";
import Bellpowerinternational from "../../Images/Bellpowerinternational.jpg";
import SSBgroup from "../../Images/SSBgroup.jpg";
import Jambosafariafrica from "../../Images/Jambosafariafrica.jpg";
import HCcarwash from "../../Images/HCcarwash.jpg";
import Africansaharalogistics from "../../Images/Africansaharalogistics.jpg";
import Leempirecleaningservices from "../../Images/Leempirecleaningservices.jpg";
import Thewisebuilders from "../../Images/Thewisebuilders.jpg";
import Crystalclearcarwash from "../../Images/Crystalclearcarwash.jpg";
import Crystalclearcarwashlogo from "../../Images/Crystalclearcarwashlogo.png";
import Crystalclearcarwashbusinesscard1 from "../../Images/Crystalclearcarwashbusinesscard1.jpg";
import Crystalclearcarwashbusinesscard2 from "../../Images/Crystalclearcarwashbusinesscard2.jpg";
import Crystalclearcarwashbusinesscard3 from "../../Images/Crystalclearcarwashbusinesscard3.jpg";
import Crystalclearcarwashbusinesscard4 from "../../Images/Crystalclearcarwashbusinesscard4.jpg";
import Crystalclearcarwashbusinesscard5 from "../../Images/Crystalclearcarwashbusinesscard5.jpg";
import Crystalclearcarwashbusinesscard6 from "../../Images/Crystalclearcarwashbusinesscard6.jpg";
import Crystalclearcarwashbusinesscard7 from "../../Images/Crystalclearcarwashbusinesscard7.jpg";
import Crystalclearcarwashbusinesscard8 from "../../Images/Crystalclearcarwashbusinesscard8.jpg";
import Crystalclearcarwashbusinesscard9 from "../../Images/Crystalclearcarwashbusinesscard9.jpg";
import Selahspringslodge from "../../Images/selahspringslodge.png";
import Selahspringslodgebusinesscard1 from "../../Images/selahspringslodgebusinesscard.jpeg";
import Selahspringslodgebusinesscard2 from "../../Images/selahspringslodgebusinesscard2.jpeg";


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
    type: "Web design",
    url: "https://african-sahara-logistics-asl.onrender.com/",
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
    type: "Web design",
    url: "https://thewisebuilders.org/",
  },
  {
    id: 10,
    image: Crystalclearcarwash,
    title: "Crystal Clear Carwash",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  {
    id: 11,
    image: Crystalclearcarwashlogo,
    title: "Crystal Clear Carwash Logo",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  {
    id: 12,
    image: Crystalclearcarwashbusinesscard1,
    title: "Crystal Clear Business Card 1",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  {
    id: 13,
    image: Crystalclearcarwashbusinesscard2,
    title: "Crystal Clear Business Card 2",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  {
    id: 14,
    image: Crystalclearcarwashbusinesscard3,
    title: "Crystal Clear Business Card 3",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  {
    id: 15,
    image: Crystalclearcarwashbusinesscard4,
    title: "Crystal Clear Business Card 4",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  {
    id: 16,
    image: Selahspringslodgebusinesscard1,
    title: "Selah Springs Lodge Business Card",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  {
    id: 17,
    image: Selahspringslodgebusinesscard2,
    title: "Selah Springs Lodge Business Card",
    category: "Graphic Design",
    type: "Graphic design",
    url: "#",
  },
  // {
  //   id: 18,
  //   image: Crystalclearcarwashbusinesscard7,
  //   title: "Crystal Clear Business Card 7",
  //   category: "Graphic Design",
  //   type: "Graphic design",
  //   url: "#",
  // },
  // {
  //   id: 19,
  //   image: Crystalclearcarwashbusinesscard8,
  //   title: "Crystal Clear Business Card 8",
  //   category: "Graphic Design",
  //   type: "Graphic design",
  //   url: "#",
  // },
  // {
  //   id: 20,
  //   image: Crystalclearcarwashbusinesscard9,
  //   title: "Crystal Clear Business Card 9",
  //   category: "Graphic Design",
  //   type: "Graphic design",
  //   url: "#",
  // },
  {
    id: 21,
    image: Selahspringslodge,
    title: "Selah Springs Lodge",
    category: "React",
    type: "Web development",
    url: "https://selahspringslodge.com/",
  },
];

const PortfolioCards = forwardRef((props, ref) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const handleFilterClick = (type) => {
    setSelectedFilter(type);
    setVisibleItems(new Set()); // Reset visibility when filter changes
  };

  const filteredData =
    selectedFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.type === selectedFilter);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, filteredData.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      itemRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [filteredData]);

  return (
    <div className="portfolio-cards-container" ref={ref}>
      <h2 className="recent-projects">Recent Projects</h2>

      <div className="portfolio-filter">
        <div>
          {["All", "Web design", "Web development", "Graphic design"].map(
            (type) => (
              <span
                key={type}
                onClick={() => handleFilterClick(type)}
                className={selectedFilter === type ? "active-filter" : ""}
              >
                {type}
              </span>
            )
          )}
        </div>
      </div>

      <div className="">
        <div className="row">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`col-12 col-sm-6 col-md-6 col-lg-4 mb-4 fade-in-section ${
                visibleItems.has(index) ? "is-visible" : ""
              }`}
            >
              <div className="item">
                {item.url && item.url !== "#" ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="item-img">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                  </a>
                ) : (
                  <div className="item-img" style={{ cursor: "default" }}>
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                )}
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
});

export default PortfolioCards;
