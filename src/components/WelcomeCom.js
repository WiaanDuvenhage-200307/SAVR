import React from "react";
import HouseholdIncome from "./HouseholdIncome";

const WelcomeCom = () => {
  return (
    <div className="welcome">
      <div>
        <h1>
          Plan your budget <br /> and become a SAVR
        </h1>
        <h2>
          Calculate your monthly expenses and plan your "financial spreadsheet".
        </h2>
      </div>

      <HouseholdIncome />
    </div>
  );
};

export default WelcomeCom;
