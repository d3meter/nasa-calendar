import React, { useState, useEffect } from "react";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CalendarView from "./pages/CalendarView";
import Favorites from "./pages/Favorites";
import Gallery from "./pages/Gallery";
import Main from "./pages/Main";
import DetailsPage from "./pages/DetailsPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [logState, setLogState] = useState("logged out");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogState(`logged in`);
      } else {
        setLogState(`logged out`);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main logState={logState} />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route
            path="/:dateId"
            element={<DetailsPage logState={logState} />}
          />
          <Route
            path="/favorites"
            element={<Favorites logState={logState} />}
          />
          <Route path="/gallery" element={<Gallery logState={logState} />} />
          <Route path="/login" element={<Login logState={logState} />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
