import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import CurrentForecast from "./Components/CurrentForecast";
import { cities } from "./utils/index.js";
import { filterForecast } from "./utils/functions.js";

const API_KEY = process.env.REACT_APP_MY_API_ID;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague");
  const [forecast, setForecast] = useState(null);

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]);

  /*const handleButtonClick = (e) => {
    console.log("testuju funkci");
    setCity(e);
  };*/

  const fetchForecast = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(filterForecast(data.list));
        console.log(data.list);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>

        {/* <div className="button-group">
          <button className="button" onClick={() => handleButtonClick()}>
            Prague
          </button>
          <button className="button" onClick={() => handleButtonClick()}>
            Reykjavik
          </button>
          <button className="button" onClick={() => handleButtonClick()}>
            Tenerife
          </button>
        </div> */}

        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          >
            {cities.map((city) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="weather">
          {weather !== null || undefined ? (
            <CurrentWeather weather={weather} />
          ) : (
            console.log("test")
          )}

          <div className="weather__forecast" id="predpoved">
            {forecast && forecast.map((f) => <CurrentForecast data={f} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
