import React, { useState, useRef } from "react";
import { tax } from "../functions/Calculations";

export default function IncomeAfterTax() {
  const [inputs, setInputs] = useState([]);
  // const monthDrop = useRef();
  const incomeVal = useRef();
  // const readSavePer = useRef();

  const readIncome = () => {
    let readTheIncome = incomeVal.current.value;
    setInputs({ ...inputs, income: readTheIncome });
    console.log(inputs);
  };

  // const readMonth = () => {
  //   let getTheMonth = monthDrop.current.value;
  //   setInputs({...inputs, month: getTheMonth});
  //   console.log(inputs);
  // };

  // const readSaveAmount = () => {
  //   let getThePer = readSavePer.current.value;
  //   setInputs({...inputs, saveAmount: getThePer});
  //   console.log(inputs);
  // };

  const addToTable = () => {
    let income = incomeVal.current.value;

    //   let month = monthDrop.current.value;
    //   let percent = readSavePer.current.value;
    //   let saved = percent/100*income;

    let savingsInputs = {
      incomes: income,
      afterTax: income - tax(income),
      appliedTax: tax(income)
      //   months: month,
      //   percent: percent + "%",
      //   amountSave: saved
    };

    console.log(savingsInputs);

    setInputs((prevInputs) => [...prevInputs, savingsInputs]);

    //   console.log(saved);
  };

  return (
    <div className="incomeAfterTax">
      <h1>Income After Tax</h1>
      <div className="incomeAfterTaxCon">
        <div className="left">
          <input
            name="income"
            type="number"
            className="house-income-input"
            placeholder="Income"
            ref={incomeVal}
            aria-label="incomeInput"
          />
          <button className="button" onClick={addToTable}>
            Add Tax
          </button>
        </div>

        <div className="right">
          <table className="taxTable">
            <tr>
              <th>Income</th>
              <th>After Tax</th>
              <th>Applied Tax</th>
            </tr>
            {inputs.map((object) => (
              <tr key={object.id}>
                <td>${object.incomes}</td>
                <td>${object.afterTax}</td>
                <td>${object.appliedTax}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
