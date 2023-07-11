import React from "react";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/:dateId" element={<DetailsPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
