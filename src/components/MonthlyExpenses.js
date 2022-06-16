import React, { useState } from "react";
import Button from "./UI/Button";

const MonthlyExpenses = () => {
  const [tableValues, setTableValues] = useState([0]);

  const addNewRow = () => {
    setTableValues([...tableValues, 0]);
  };

  const handleInputChange = (newNumber, index) => {
    let changingFormValue = tableValues;
    changingFormValue[index] = newNumber;

    console.log(changingFormValue);
    setTableValues(changingFormValue);
  };

  return (
    <div className="month-expenses">
      <div className="row">
        <h1>Monthly Expenses</h1>
      </div>
      <table className="table">
        <tr>
          <th>Household Member</th>
          <th>Expense</th>
          <th>Expense Type</th>
          <th>Amount</th>
        </tr>
        {tableValues.map((number, index) => (
          <tr>
            <td>
                <input 
                    type="text"
                    placeholder="Name" 
                    aria-label="name"
                />
            </td>
            <td>
              <input
                className="month-expenses-input"
                onChange={(e) => handleInputChange(e.target.value)}
                aria-label="expense-input"
                type="text"
                placeholder="Please Enter"
              />
            </td>
            <td>
              <p>$</p>
              <input
                className="month-expenses-input"
                onChange={(e) => handleInputChange(+e.target.value)}
                aria-label="amount"
                type="number"
                placeholder="Amount"
              />
            </td>
          </tr>
        ))}

        <tr>
          <button
            function={() => addNewRow(true)}
            name="Add Expense"
            className="button"
          />
        </tr>
      </table>
    </div>
  );
};

export default MonthlyExpenses;
