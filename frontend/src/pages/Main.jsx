import React from "react";
import { Link } from "react-router-dom";
import DayDetail from "./DayDetail";
import "./css/Main.css";

function Main() {
  return (
    <div className="Main">
      <p>Welcome to NASA! If you need some space...</p>
      <DayDetail />
    </div>
  );
}

export default Main;
