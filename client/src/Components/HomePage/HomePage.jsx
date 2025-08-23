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
  const contactSectionRef = useRef(null); // 👈 Create a ref here

  return (
    <>
      <Hero />
      <HomeAbout />
      <FeaturedServices />
      <PortfolioCards />
      <HappyClients />
      <Cta scrollToRef={contactSectionRef} /> {/* 👈 Pass the ref as a prop */}
      <ContactForm ref={contactSectionRef} /> {/* 👈 Attach the ref */}
      <Footer />
    </>
  );
};

export default HomePage;
