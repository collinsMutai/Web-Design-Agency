import React, { useState } from "react";
import "./Navbar.css";
import { MenuData } from "./MenuData";
import HomePage from "../HomePage/HomePage";
import logo from "../../Images/collinsfrontendlogo.png";
import { Link, NavLink, redirect } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const logoHandler = () => {
    return redirect("/");
  };
  return (
    <>
      <nav className="NavbarItems">
        <NavLink to={"/"}>
          <img src={logo} className="logo" alt="" onClick={logoHandler} />
        </NavLink>

        <div
          className="menu-icons"
          onClick={(e) => (toggle ? setToggle(false) : setToggle(true))}
        >
          {!toggle && (
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
          )}
          {toggle && (
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
              style={({ isActive }) => ({
                color: isActive ? "#13c2e9" : "",
                textDecoration: "none",
              })}
              to={item.url}
              onClick={(e) => (toggle ? setToggle(false) : setToggle(true))}
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
