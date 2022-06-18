import React from "react";
import MonthlyExpenses from "./MonthlyExpenses";

const SummaryHeading = () => {
  return (
    <div className="sum-heading">
      <h1>Summary</h1>
      <h2>A summarised view of your budget.</h2>

      <div className="income-montlyExpenses-group">
        <MonthlyExpenses />
      </div>
    </div>
  );
};

export default SummaryHeading;
