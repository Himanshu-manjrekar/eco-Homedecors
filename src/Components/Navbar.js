import React from "react";
import "../Assets/Css/Nav.css";
import logo from '../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Navitem from "./reusablecomponents/NavItem";
 
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} className="nav__logo" alt=""/>
            <div className="Nav__text">
                <h3>eco</h3>
                <h5>Home Decors</h5>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ms-lg-auto mb-lg-0">
              <Navitem page="Home" active={true} to="/"/>
              <Navitem page="About" active={true} to="/About"/>
              <Navitem page="Services" active={true} to="/Services"/>
              <Navitem page="Products" active={true} to="/Products"/>
              <Navitem page="Blog" active={true} to="/Blog"/>
              <Navitem page="Contact" active={true} to="/Contact"/>
            </ul>
            <div className="social__icons d-flex">
            <FaFacebookF className="icon"/>
            <FaTwitter  className="icon"/>
            <FaInstagram  className="icon"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
