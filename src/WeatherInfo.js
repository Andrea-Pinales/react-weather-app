import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row city-date">
          <h2>{props.data.city}</h2>
          <FormattedDate date={props.data.date} />
        </div>

        <div className="row current-weather">
          <div className="col">
            <h1>{Math.round(props.data.temperature)}°C</h1>
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <span className="text-capitalize">{props.data.description}</span>
        </div>

        <div className="row justify-content-center high-low">
          <div className="col-2">
            <h3>H: {Math.round(props.data.high)}°</h3>
          </div>

          <div className="col-2">
            <h3>L: {Math.round(props.data.low)}°</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
