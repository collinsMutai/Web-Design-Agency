import React, { useEffect, useState } from "react";
import SliderContent from "../SliderContent/SliderContent";
import ImageSlider from "../ImageSlider/ImageSlider";
import Arrows from "../Arrows/Arrows";
import Dots from "../Dots/Dots";
import "../Slider.css";

const len = ImageSlider.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? len : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={ImageSlider} />
      <Arrows prevSlide={handlePrevSlide} nextSlide={handleNextSlide} />
      <Dots
        activeIndex={activeIndex}
        imageSlider={ImageSlider}
        onClick={(index) => setActiveIndex(index)}
      />
    </div>
  );
};

export default Slider;
