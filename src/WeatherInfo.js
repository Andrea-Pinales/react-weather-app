import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row city-date">
          <h2>{props.data.city}</h2>
          <FormattedDate date={props.data.date} />
        </div>

        <button className="unit">C</button>
        <button className="unit">F</button>

        <div class="row current-weather">
          <div class="col">
            <h1>{Math.round(props.data.temperature)}°</h1>
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="Images"
            />
          </div>
          <span className="text-capitalize">{props.data.description}</span>
        </div>

        <div class="row justify-content-center high-low">
          <div class="col-2">
            <h3>H: {Math.round(props.data.high)}°</h3>
          </div>

          <div class="col-2">
            <h3>L: {Math.round(props.data.low)}°</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
