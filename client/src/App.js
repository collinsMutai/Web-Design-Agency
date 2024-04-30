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

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/donations" element={<DonationsPage />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
