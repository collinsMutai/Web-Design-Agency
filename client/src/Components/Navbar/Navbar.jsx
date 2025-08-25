import React, { useState } from "react";
import "./Navbar.css";
import { MenuData } from "./MenuData";
import logo from "../../Images/collinsfrontendlogo.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ homeRef, homeAboutRef, servicesRef, portfolioRef, contactSectionRef }) => {
  const [toggle, setToggle] = useState(false);

  // Scroll to the section smoothly
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavClick = (title) => {
    if (title === "Home") {
      handleScroll(homeRef); // Scroll to the Hero (Home) section
    } else if (title === "About") {
      handleScroll(homeAboutRef);
    } else if (title === "Services") {
      handleScroll(servicesRef);
    } else if (title === "Portfolio") {
      handleScroll(portfolioRef);
    } else if (title === "Contact") {
      handleScroll(contactSectionRef);
    }
    setToggle(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="NavbarItems">
      <NavLink to={"/"} onClick={() => handleScroll(homeRef)}> {/* Scroll to Hero on Home logo click */}
        <img src={logo} className="logo" alt="CollinsFrontend Logo" />
      </NavLink>

      <div
        className="menu-icons"
        onClick={() => setToggle(!toggle)}
      >
        {!toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 menuBars"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 menuBars"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => (
          <NavLink
            key={index}
            className={item.cName}
            onClick={() => handleNavClick(item.title)} // Scroll instead of navigating
            style={({ isActive }) => ({
              color: isActive ? "#13c2e9" : "",
              textDecoration: "none",
            })}
          >
            {item.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
