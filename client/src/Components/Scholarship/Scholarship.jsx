import React from "react";
import "./Scholarship.css";
import WhatWeOffer from "./WhatWeOffer";
import AboutUs from "./AboutUs";
import ScholarshipDetails from "./ScholarshipDetails"; // ✅ Import new component
import Header from "../Header/Header";
import ApplicationForm from "./ApplicationForm";

const Scholarship = () => {
  return (
    <>
      <Header
        title="Tech Scholarship"
        description="Empowering Tech Enthusiasts. Transforming Lives."
      />
      <div className="scholarship-container">
        <AboutUs />
        <WhatWeOffer />
        <ScholarshipDetails /> 
        <ApplicationForm />
      </div>
    </>
  );
};

export default Scholarship;
