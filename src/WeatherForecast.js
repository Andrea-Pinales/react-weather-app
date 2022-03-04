import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
