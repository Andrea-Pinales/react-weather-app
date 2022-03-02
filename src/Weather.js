import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      // date: "Thursday | March, 1 | 10:54",
      temperature: response.data.main.temp,
      icon: "./images/01d_241.png",
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="button" />
            </div>
          </div>
        </form>

        <div className="container">
          <div className="row city-date">
            <h2>{weatherData.city}</h2>
            <FormattedDate date={weatherData.date} />
          </div>

          <button className="unit">C</button>
          <button className="unit">F</button>

          <div class="row current-weather">
            <div class="col">
              <h1>{Math.round(weatherData.temperature)}°</h1>
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="Images"
              />
            </div>
            <span className="text-capitalize">{weatherData.description}</span>
          </div>

          <div class="row justify-content-center high-low">
            <div class="col-2">
              <h3>H: {Math.round(weatherData.high)}°</h3>
            </div>

            <div class="col-2">
              <h3>L: {Math.round(weatherData.low)}°</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1d016b2c6f287c8ba67f95b2a66be332";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
