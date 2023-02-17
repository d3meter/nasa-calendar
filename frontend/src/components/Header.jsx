import React, { useState, useEffect } from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import nasaLogo from "../pub-imgs/nasa-logo.png";
import { logOut } from "../admin/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Header() {
  const [logState, setLogState] = useState("logged out");
  const [handleBtnDisable, setHandleBtnDisable] = useState(true);
  const [userLoggedin, setUserLoggedin] = useState("");

  async function signOut() {
    await logOut();
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogState(`logged in`);
        setHandleBtnDisable(false);
        setUserLoggedin(user.email);
      } else {
        setLogState(`logged out`);
        setHandleBtnDisable(true);
        setUserLoggedin("");
      }
    });
  }, []);

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
      <div className="header-section2">
        <img src={nasaLogo} alt="logo" />
      </div>
      <div className="header-section3">
        {logState === "logged in" ? (
          <>
            <span className="material-icons md-36">verified_user</span>
            <h2>{userLoggedin}</h2>
            <button
              className="header-btn"
              onClick={signOut}
              disabled={handleBtnDisable}
            >
              <span className="material-icons md-48">logout</span>
              <p>Logout</p>
            </button>
          </>
        ) : (
          <>
            <Link className="header-btn" to="/login">
              <span className="material-icons md-48">login</span>
              <p>Login</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
