import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <div className="Buttons">
          <button className="unit">C</button>
          <button className="unit" href="/" onClick={convertFahrenheit}>
            F
          </button>
        </div>

        <h1>{Math.round(props.celsius)}°C</h1>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <div className="Buttons">
          <button className="unit" href="/" onClick={convertCelsius}>
            C
          </button>
          <button className="unit">F</button>
        </div>

        <h1>{Math.round(fahrenheit)}°F</h1>
      </span>
    );
  }
}
