import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
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
