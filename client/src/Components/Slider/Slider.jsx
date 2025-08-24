import React, { useEffect, useState } from "react";
import SliderContent from "../SliderContent/SliderContent";
import ImageSlider from "../ImageSlider/ImageSlider";
import Arrows from "../Arrows/Arrows";
import Dots from "../Dots/Dots";
import "../Slider.css";

const Slider = ({ scrollToRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = ImageSlider.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [lastIndex]);

  return (
    <div className="slider-container">
      <SliderContent
        activeIndex={activeIndex}
        imageSlider={ImageSlider}
        scrollToRef={scrollToRef}
      />
      <Arrows
        prevSlide={() =>
          setActiveIndex((prev) => (prev === 0 ? lastIndex : prev - 1))
        }
        nextSlide={() =>
          setActiveIndex((prev) => (prev === lastIndex ? 0 : prev + 1))
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={ImageSlider}
        onClick={(index) => setActiveIndex(index)}
      />
    </div>
  );
};

export default Slider;
