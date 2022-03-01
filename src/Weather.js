import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" />
          </div>
        </div>
      </form>
      <div className="row city-date">
        <h2>Los Angeles</h2>
        <h3>Date | Month, Day | Hr:Min</h3>
      </div>

      <div class="row current-weather">
        <div class="col">
          <h1>20°</h1>
          <img src="./images/01d_241.png" alt="sunny" className="Images" />
        </div>
        <span className="text-capitalize">sunny</span>
      </div>

      <div class="row justify-content-center high-low">
        <div class="col-2">
          <h3>H: 20°</h3>
        </div>

        <div class="col-2">
          <h3>L: 20°</h3>
        </div>
      </div>
    </div>
  );
}
