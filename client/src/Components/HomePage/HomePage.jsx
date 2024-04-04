import React from "react";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import FeaturedServices from "../FeaturesServices/FeaturedServices";
import Hero from "../Hero/Hero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HappyClients from "../HappyClients/HappyClients";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <FeaturedServices />
      <FeaturedProjects />
      <HappyClients />
    </>
  );
};

export default HomePage;
