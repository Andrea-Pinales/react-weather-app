import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div class="row justify-content-center">
          <div className="col-2 Card">
            <WeatherIcon code="01d" />
            <div className="WeatherForecast-Temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temp.max)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
            <p>Saturday 06</p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1d016b2c6f287c8ba67f95b2a66be332";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
