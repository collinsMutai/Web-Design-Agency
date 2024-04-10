import React from "react";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import FeaturedServices from "../FeaturesServices/FeaturedServices";
import Hero from "../Hero/Hero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HappyClients from "../HappyClients/HappyClients";
import Cta from "../Cta/Cta";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <FeaturedServices />
      <FeaturedProjects />
      {/* <HappyClients />
      <Cta /> */}
    </>
  );
};

export default HomePage;
