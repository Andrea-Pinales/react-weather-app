import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear sky",
    "01n": "clear sky",
    "02d": "few clouds",
    "02n": "few clouds",
    "03d": "scattered clouds",
    "03n": "scattered clouds",
    "04d": "broken clouds",
    "04n": "broken clouds",
    "09d": "shower rain",
    "09n": "shower rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "thunderstorm",
    "11n": "thunderstorm",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  return (
    <div className="WeatherIcon">
      <img
        src={`${process.env.PUBLIC_URL}/images/${props.code}_241.png`}
        alt={props.alt}
        className="WeatherIcon"
      />
    </div>
  );
}
