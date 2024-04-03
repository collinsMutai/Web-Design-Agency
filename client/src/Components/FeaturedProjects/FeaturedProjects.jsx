import React, { useEffect, useState } from "react";
import "./FeaturedProjects.css";
import ProjectSlider from "../ImageSlider/ImageSlider";
import Arrows from "../Arrows/Arrows";

const len = ProjectSlider.length - 1;

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="featured-projects-container">
      <h2 className="recent-projects">Recent Projects</h2>
      {ProjectSlider.map((item, index) => (
        <div className="project" key={index}>
          <img
            className={
              index == activeIndex ? "project-image slide active" : "inactive"
            }
            src={item.urls}
            alt=""
          />
          <div className="project-desc">
            <h6
              className={
                index == activeIndex ? "project-title slide active" : "inactive"
              }
            >
              {item.title}
            </h6>
            <h4>
              <a href="">View Project</a>
            </h4>
          </div>

          <div className="arrows">
            <span
              className="arrows-prev"
              onClick={() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
              }
            >
              <button className="arrow-btn">prev</button>
            </span>
            <span
              className="arrows-next"
              onClick={() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
              }
            >
              <button className="arrow-btn">next</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
