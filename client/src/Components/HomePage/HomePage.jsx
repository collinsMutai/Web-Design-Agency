import React, { useRef } from "react";
import FeaturedServices from "../FeaturesServices/FeaturedServices";
import Hero from "../Hero/Hero"; // Hero is now for the Home section
import HomeAbout from "../HomeAbout/HomeAbout";
import HappyClients from "../HappyClients/HappyClients";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";
import PortfolioCards from "../PortfolioCards/PortfolioCards";
import ContactForm from "../ContactForm/ContactForm";
import Navbar from "../Navbar/Navbar"; // Import Navbar

const HomePage = () => {
  const contactSectionRef = useRef(null);  // Ref for Contact Form section
  const homeRef = useRef(null);  // Ref for Hero (Home) section
  const homeAboutRef = useRef(null);  // Ref for About section
  const servicesRef = useRef(null);  // Ref for Services section
  const portfolioRef = useRef(null);  // Ref for Portfolio section

  return (
    <>
      {/* Pass refs to Navbar */}
      <Navbar
        homeRef={homeRef}  // Pass homeRef for the Home section (Hero)
        homeAboutRef={homeAboutRef}
        servicesRef={servicesRef}
        portfolioRef={portfolioRef}
        contactSectionRef={contactSectionRef}
      />

      {/* Hero Section (for Home) */}
      <Hero ref={homeRef} scrollToRef={homeAboutRef} />

      {/* About Section */}
      <HomeAbout ref={homeAboutRef} />

      {/* Featured Services Section */}
      <FeaturedServices ref={servicesRef} />

      {/* Portfolio Cards Section */}
      <PortfolioCards ref={portfolioRef} />

      {/* Happy Clients Section */}
      <HappyClients />

      {/* Call to Action Section */}
      <Cta scrollToRef={contactSectionRef} />

      {/* Contact Form Section */}
      <ContactForm ref={contactSectionRef} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
