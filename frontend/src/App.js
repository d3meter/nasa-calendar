import React, {useEffect, useState} from "react";
import './App.css';
import { addDataNasa, getDataNasa } from "./admin/dataManager";

function App() {
  const [nasaData, setNasaData] = useState([]);

  const apiKey = "QYSDCrsuNdQpx6YY9Yg2eO9RBWDIVwpWkwhwYWi8";
  let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2022-01-01&end_date=2022-02-01`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setNasaData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
