import React, { useRef } from "react";
import FeaturedServices from "../FeaturesServices/FeaturedServices";
import Hero from "../Hero/Hero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HappyClients from "../HappyClients/HappyClients";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";
import PortfolioCards from "../PortfolioCards/PortfolioCards";
import ContactForm from "../ContactForm/ContactForm";

const HomePage = () => {
  const contactSectionRef = useRef(null);
  const homeAboutRef = useRef(null); // 👈 Add this ref

  return (
    <>
      <Hero scrollToRef={homeAboutRef} />
      <HomeAbout ref={homeAboutRef} />
      <FeaturedServices />
      <PortfolioCards />
      <HappyClients />
      <Cta scrollToRef={contactSectionRef} />
      <ContactForm ref={contactSectionRef} />
      <Footer />
    </>
  );
};

export default HomePage;
