import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import nasaLogo from "../pub-imgs/nasa-logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="header-section1">
        <Link className="header-btn" to="/">
          <span className="material-icons md-48">home</span>
          <p>Home</p>
        </Link>
        <Link className="header-btn" to="/calendar">
          <span className="material-icons md-48">date_range</span>
          <p>Calendar</p>
        </Link>
        <Link className="header-btn" to="/favorites">
          <span className="material-icons md-48">star_rate</span>
          <p>My Favorites</p>
        </Link>
      </div>
      <div className="header-section2" to="/">
        <img src={nasaLogo} alt="logo" />
      </div>
      <div className="header-section3">
        <button className="header-btn">
          <span className="material-icons md-48">login</span>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
