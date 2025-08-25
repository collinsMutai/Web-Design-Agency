import "./App.css";

import AboutPage from "./Components/AboutPage/AboutPage";
import HomePage from "./Components/HomePage/HomePage";
import DonationsPage from "./Components/DonationsPage/DonationsPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import BlogPage from "./Components/BlogPage/BlogPage";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import AppContextProvider from "./AppContext";

import React, { useState, useEffect, useRef } from "react";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Refs for sections
  const homeAboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to specific section on route change
  useEffect(() => {
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/about"
            element={<AboutPage ref={homeAboutRef} />}
          />
          <Route
            path="/services"
            element={<ServicesPage ref={servicesRef} />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio ref={portfolioRef} />}
          />
          <Route
            path="/contact"
            element={<ContactPage ref={contactRef} />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/donations" element={<DonationsPage />} />
        </Route>
      </Routes>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "8px",
            width: "48px",
            height: "48px",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style={{ display: "block" }}
          >
            <path
              d="M7 11l5 -5l5 5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 17l5 -5l5 5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </AppContextProvider>
  );
}

export default App;
