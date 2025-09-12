import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import FeaturedServices from "./Components/FeaturesServices/FeaturedServices";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactForm from "./Components/ContactForm/ContactForm";
import BlogPage from "./Components/BlogPage/BlogPage";
import Scholarship from "./Components/Scholarship/Scholarship";
import DonationSuccess from "./Components/PayPalDonationSuccess/PaypalDonationSuccess";
import PaypalDonationFailure from "./Components/PaypalDonationFailure/PaypalDonationFailure";
import AppContextProvider from "./AppContext";
import Navbar from "./Components/Navbar/Navbar";
import MaintenancePage from "./MaintenancePage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const isMaintenanceMode = process.env.REACT_APP_MAINTENANCE === "true";

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

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage ref={homeAboutRef} />} />
            <Route
              path="/services"
              element={<FeaturedServices ref={servicesRef} />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio ref={portfolioRef} />}
            />
            <Route path="/contact" element={<ContactForm ref={contactRef} />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* Scholarship Donations route */}
            <Route path="/scholarship-donations" element={<Scholarship />} />
            <Route path="/donation-success" element={<DonationSuccess />} />
            <Route
              path="/donation-cancel"
              element={<PaypalDonationFailure />}
            />
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
    </PayPalScriptProvider>
  );
}

export default App;
