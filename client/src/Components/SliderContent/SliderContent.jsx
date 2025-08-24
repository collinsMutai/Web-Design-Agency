import React from "react";

const SliderContent = ({ activeIndex, imageSlider, scrollToRef }) => {
  const handleScroll = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "section slide active" : "inactive"}
        >
          <div className="image-container">
            <img className="slide-image" src={slide.urls} alt={slide.title} />
            <div className="overlay"></div>
          </div>
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          <button className="hero-btn" onClick={handleScroll}>
            Learn More
          </button>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
