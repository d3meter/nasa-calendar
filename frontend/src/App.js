import React from "react";
import "./App.css";
/* import { addDataNasa, getDataNasa } from "./admin/dataManager"; */
import "react-calendar/dist/Calendar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CalendarView from "./pages/CalendarView";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import DetailsPage from "./pages/DetailsPage";
import Login from "./pages/Login";
/* import nasaData from "./data/nasa-data.json";
import { getISOLocalDate } from "@wojtekmaj/date-utils"; */
import Registration from "./pages/Registration";

function App() {
  //start of update fetch
/* const [nasaDataUpdate, setNasaDataUpdate] = useState([]);


useEffect(() => {
    const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";

    const date = new Date();
  
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
  
    let dateTodayRaw = `${year}-${month}-${day}`;
    let endDate = getISOLocalDate(new Date(dateTodayRaw));
  
    let startDate = nasaData[nasaData.length - 1].date;

    if (startDate !== endDate) {
      let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;
      fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
          setNasaDataUpdate(data);
          console.log(nasaDataUpdate);
        });
    }
  }, []);

useEffect(() => {
    if (nasaDataUpdate.length === 2) {
      let newArray = nasaData.push(nasaDataUpdate[1]);
      nasaData = newArray;
    } else {
      let nasaDataUpdateSlice = nasaDataUpdate.slice(1);
      let newArray = nasaData.concat(nasaDataUpdateSlice);
      nasaData = newArray;
      console.log(nasaData);
    }
  }, [nasaDataUpdate]); */

  //end of update fetch

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
