import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "1d016b2c6f287c8ba67f95b2a66be332";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div class="row justify-content-center">
        <div className="col-2 Card">
          <WeatherIcon code="01d" />
          <div className="WeatherForecast-Temperatures">
            <span className="WeatherForecast-temperature-max">33°</span>
            <span className="WeatherForecast-temperature-min">33°</span>
          </div>
          <p>Saturday 06</p>
        </div>
      </div>
    </div>
  );
}
