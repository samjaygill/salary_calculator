import React from "react";
import './css/HourlySalary.css'
import { Link } from "react-router-dom";

const AnnualCalculator = () => {
  function calculateAnnualSalary() {
    var wage = parseFloat(document.getElementById("text_wage").value);
    var hours = parseFloat(document.getElementById("text_hours").value);
    var calculate = wage * hours * 52;

    const result =
      "£" + calculate.toLocaleString({ style: "currency", currency: "GBP" });
    document.getElementById("results").innerHTML = result;
  }
  return (
    <>
      <div className="main-container">
      <div className="card">
        <p>Enter the following information to work out your annual salary:</p>
        <div className="details">
        <label for="text_hours">Hours Per Week:</label>
        <input type="text" name="hours" id="text_hours" />

        <br />
        <label for="text_wage">Hourly Wage:</label>
        <input type="text" name="wage" id="text_wage" />
        
        <br />
        </div>
        <button className="button" onClick={calculateAnnualSalary}>Calculate</button>
        <hr/>
        <p id="results"></p>
        <p><Link to="/hourly" className="link">Calculate hourly salary</Link></p>
      </div>
      </div>

    </>
  );
};

export default AnnualCalculator;
