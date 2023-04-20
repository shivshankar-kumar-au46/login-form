import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import Logo from "../../media/nav-logo.png";
import { Route, Routes, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Cookies from "js-cookie";

const Navbar = () => {
  const [mediaIcon, setMediaIcon] = useState(true);
  const [closeIcon, setCloseIcon] = useState(false);

  const showNavbar = () => {
    setMediaIcon(false);
    setCloseIcon(true);
  };

  const hideNavbar = () => {
    setMediaIcon(true);
    setCloseIcon(false);
  };

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-logo">
          <span className="logo-text">Logo</span>
        </div>

        <div className={mediaIcon ? "nav-menu" : "nav-menu-mobile"}>
          <ul>
            <Link to={`/`}>
              <li className="nav-items">
                <a className="nav-link">Home</a>
              </li>
            </Link>
            <Link to={`/`}>
              <li className="nav-items">
                <a className="nav-link">About Us</a>
              </li>
            </Link>
            <Link to={`/`}>
              <li className="nav-items">
                <a className="nav-link">The App</a>
              </li>
            </Link>
            <Link to={`/signup`}>
              <li className="nav-items">
                <a className="nav-link">Singup</a>
              </li>
            </Link>
            <Link to={`/login`}>
              <li className="nav-items">
                <a className="nav-link">Login</a>
              </li>
            </Link>
            <Link to={`/login`}>
              <li className="nav-items">
                <a className="nav-link" onClick={()=>{
                  Cookies.remove('userToken')
                }}>Logout</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="hamburger active" onClick={showNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <FaTimes
        className={closeIcon ? "close_logo" : "close_logo_mobile"}
        onClick={hideNavbar}
      />
    </div>
  );
};

export default Navbar;
