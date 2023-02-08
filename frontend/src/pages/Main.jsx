import React from "react";
import { Link } from "react-router-dom";
import DayDetail from "./DayDetail";
import "./css/Main.css";

function Main() {
  return (
    <div className="Main">
      <div className="main-container">
        <DayDetail />
      </div>
    </div>
  );
}

export default Main;
