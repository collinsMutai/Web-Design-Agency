import React from "react";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import FeaturedServices from "../FeaturesServices/FeaturedServices";
import Hero from "../Hero/Hero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HappyClients from "../HappyClients/HappyClients";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";
import PortfolioCards from "../PortfolioCards/PortfolioCards";
import ContactForm from "../ContactForm/ContactForm";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <FeaturedServices />
      <FeaturedProjects />
      <PortfolioCards />
      <HappyClients />
      <Cta />
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
};

export default HomePage;
