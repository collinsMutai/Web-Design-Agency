import React, { useState } from "react";
import "./Navbar.css";
import { MenuData } from "./MenuData";
import logo from "../../Images/collinsfrontendlogo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ homeRef, homeAboutRef, servicesRef, portfolioRef, contactSectionRef }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); // To track current URL

  // Scroll to the section smoothly
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle click for scrolling to sections
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

  // Check if we're already at the homepage or a section route
  const isOnSection = location.pathname === "/";

  return (
    <nav className="NavbarItems">
      {/* Logo that scrolls to Home section */}
      <NavLink to={"/"} onClick={() => isOnSection && handleScroll(homeRef)}>
        <img src={logo} className="logo" alt="CollinsFrontend Logo" />
      </NavLink>

      {/* Mobile menu toggle icon */}
      <div className="menu-icons" onClick={() => setToggle(!toggle)}>
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

      {/* Navigation menu */}
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          // If it's a link that navigates to a different route, handle it with React Router (NavLink)
          if (item.title === "Scholarship" || item.title === "Blog") {
            return (
              <NavLink
                key={index}
                className={item.cName}
                to={item.url} // Use NavLink to handle route navigation
                onClick={() => setToggle(false)} // Close the menu on click
                style={({ isActive }) => ({
                  color: isActive ? "#13c2e9" : "", // Active link color
                  textDecoration: "none", // No underline on active link
                })}
              >
                {item.title}
              </NavLink>
            );
          }

          // For section-based navigation (scroll to sections)
          return (
            <NavLink
              key={index}
              className={item.cName}
              onClick={() => handleNavClick(item.title)} // Scroll to section
              to="/"
              style={{
                cursor: "pointer",
                color: location.pathname === "/" ? "#13c2e9" : "",
              }}
            >
              {item.title}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
