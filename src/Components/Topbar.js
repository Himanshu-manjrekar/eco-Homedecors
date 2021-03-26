import React from "react";
import "../Assets/Css/Topbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";

const Topbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container d-flex justify-content-end pt-2 pb-2">
          <span className="phone__text">
            <FaPhoneAlt className="phone__icon me-2 mb-1" />
            Free phone : 
            <a className="telephone" href="tel:+"> 800-2345-6789</a>
          </span>
        </div>
      </nav>
      <Navbar />
    </>
  );
};

export default Topbar;
