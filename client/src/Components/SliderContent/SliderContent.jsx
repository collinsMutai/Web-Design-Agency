import React from "react";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index == activeIndex ? "section slide active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          <button className="hero-btn">Learn More</button>

          <div id="overlay"></div>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
