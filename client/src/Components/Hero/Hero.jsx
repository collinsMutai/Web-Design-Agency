import React, { forwardRef } from "react";
import "./Hero.css";
import Slider from "../Slider/Slider";

// Forward ref for Hero component to allow scrolling to it
const Hero = forwardRef(({ scrollToRef }, ref) => {
  return (
    <div ref={ref} id="home">
      <Slider scrollToRef={scrollToRef} />
    </div>
  );
});

export default Hero;
