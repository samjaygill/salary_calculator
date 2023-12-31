import React from "react";
import "./css/HourlySalary.css";
import "./css/Home.css";

import { Link } from "react-router-dom";

const HourlySalary = () => {
  function calculateHourlySalary() {
    const annualWage = parseFloat(
      document.getElementById("text_annual_wage").value
    );
    const hours = parseFloat(
      document.getElementById("text_weekly_hours").value
    );

    const calculate = (annualWage / hours / 52).toFixed(2);
    const fullResult = "£" + calculate;
    document.getElementById("hourly_results").innerHTML = fullResult;
  }
  return (
    <>
      <div className="main-container">
        <div className="card">
          <p>Enter the following information to work out your hourly salary:</p>
          <div className="details">
            <label for="text_hours">Hours Per Week:</label>
            <input type="text" name="weekly_hours" id="text_weekly_hours" />
            <br />

            <label for="text_annual_wage">Annual Wage:</label>
            <input type="text" name="annual_wage" id="text_annual_wage" />
            
            <br />
            </div>
          <button className="button" onClick={calculateHourlySalary}>
            Calculate
          </button>
          <hr />
          <p id="hourly_results"></p>
        <p><Link to="/" className="link">Calculate annual salary</Link></p>

        </div>
      </div>
    </>
  );
};

export default HourlySalary;
