import React, { useState, useRef, useEffect } from "react";

export default function Savings() {
  const [inputs, setInputs] = useState([]);
  const monthDrop = useRef();
  const incomeVal = useRef();
  const readSavePer = useRef();

  const readIncome = () => {
    let readTheIncome = incomeVal.current.value;
    setInputs({...inputs, income: readTheIncome});
    console.log(inputs);
  };

  const readMonth = () => {
    let getTheMonth = monthDrop.current.value;
    setInputs({...inputs, month: getTheMonth});
    console.log(inputs);
  };

  const readSaveAmount = () => {
    let getThePer = readSavePer.current.value;
    setInputs({...inputs, saveAmount: getThePer});
    console.log(inputs);
  };

  const addToTable = () => {
    let income = incomeVal.current.value;
    let month = monthDrop.current.value;
    let percent = readSavePer.current.value;
    let saved = percent/100*income;

    let savingsInputs = {
        incomes : income,
        months: month,
        percent: percent + "%",
        amountSave: saved
    }

    console.log(savingsInputs);

    setInputs((prevInputs) => (
        [...prevInputs, savingsInputs]
    ))

    

    console.log(saved);
  };

  return (
    <div className="savings">
      <div className="left">
        <h1>Savings</h1>
        <h2>Enter below your income and the percentage you want to save.</h2>
        <div className="inputGroup">
            <select name="monthDrop" id="" ref={monthDrop}>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
            </select>
            <input
                name="income"
                type="number"
                aria-label="incomeAmount"
                className="house-income-input"
                placeholder="Income"
                ref={incomeVal}
            />
            <input
                name="savingInput"
                aria-label="savingPercent"
                className="house-income-input"
                type="number"
                placeholder="Saving Amount (%)"
                ref={readSavePer}
            />
            <button className="button" onClick={addToTable}>
                Add Savings
            </button>
        </div>
      </div>
      <div className="right">
        <table className="savingsTable">
          <tr>
            <th>Month</th>
            <th>Income</th>
            <th>Percentage Saved</th>
            <th>Saved Amount</th>
          </tr>
          {inputs.map(object => (
            <tr key={object.id}>
                <td className="monthName">{object.months}</td>
                <td>{object.incomes}</td>
                <td>{object.percent}</td>
                <td>{object.amountSave}</td>
            </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
