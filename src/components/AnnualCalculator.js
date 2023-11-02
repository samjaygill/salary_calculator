import React from "react";
import './css/HourlySalary.css'

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
      <div>
        <p>Enter the following information to work out your annual salary:</p>
        <label for="text_hours">Hours Per Week:</label>
        <input type="text" name="hours" id="text_hours" />

        <br />
        <label for="text_wage">Hourly Wage:</label>
        <input type="text" name="wage" id="text_wage" />

        <br />
        <button className="button" onClick={calculateAnnualSalary}>Calculate</button>
        <hr/>
        <p id="results"></p>
      </div>
    </>
  );
};

export default AnnualCalculator;
