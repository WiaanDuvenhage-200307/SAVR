import React, { useState } from "react";

const TotalIncome = () => {
  const [totalIncome, setTotalIncome] = useState(0);

  return (
    <div className="total-income">
      <h3>HOUSEHOLD INCOME</h3>
      <h2>${totalIncome}</h2>
    </div>
  );
};

export default TotalIncome;
