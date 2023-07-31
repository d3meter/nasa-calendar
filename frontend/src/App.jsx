import React, { useState, useEffect } from "react";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CalendarView from "./pages/CalendarView";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import DetailsPage from "./pages/DetailsPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFavorites } from "./database/dataManager";

function App() {
  const [logState, setLogState] = useState("logged out");
  const [favorites, setFavorites] = useState([]);

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

  useEffect(() => {
    if (logState === "logged in") {
      fetchFavorites();
    }
  }, [logState]);

  const fetchFavorites = async () => {
    try {
      const fetchedData = await getFavorites();
      setFavorites(fetchedData);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main favorites={favorites} />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route
            path="/:dateId"
            element={<DetailsPage favorites={favorites} />}
          />
          <Route
            path="/favorites"
            element={<Favorites logState={logState} favorites={favorites} />}
          />
          <Route path="/login" element={<Login logState={logState} />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
