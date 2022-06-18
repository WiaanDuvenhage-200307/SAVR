import React, { useState } from "react";
import Button from "./UI/Button";
import { countTogether } from "../functions/Calculations";
import { tab } from "@testing-library/user-event/dist/tab";

const MonthlyExpenses = () => {
    const [formValues, setFormValues] = useState([]);

    const [status, setStatus] = useState("normal");
  
    const [inputList, setInputList] = useState([{ names: "", expenseType: "", income: "" }]);
  
    const [total, setTotal] = useState("");
  
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        console.log(list);
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
    let arr = [];
    // handle click event of the Add button
    const handleAddClick = () => {
  
      setInputList([...inputList, { names: "", expenseType: "", income: "" }]);
  
  
      for (let i = 0; i < inputList.length; i++){
  
          arr.push(+inputList[i].income);
          console.log(arr);
  
          setTotal(countTogether(arr));
          console.log(+total);
      }
  
  
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
          <th>Amount</th>
        </tr>
        {inputList.map((x, i) => {
            return(
                <tr>
                <td>
                  <input name="names" value={x.names} type="text" placeholder="Name" aria-label="name" className="month-expenses-input" onChange={(e) => handleInputChange(e, i)}/>
                </td>
                <td>
                  <input
                    className="month-expenses-input"
                    aria-label="expense-input"
                    type="text"
                    name="expenseType"
                    placeholder="Please Enter"
                    value={x.expenseType}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </td>
                <td>
                  <p>$</p>
                  <input
                    className="month-expenses-input"
                    aria-label="amount"
                    type="number"
                    name="income"
                    placeholder="Amount"
                    value={x.income}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </td>
              </tr>
            )

        })}

        <tr>
            <button name="Add Expense" className="button" onClick={handleAddClick}>Add Expense</button>
            <h4 className="month-expenses__total">Total : ${total}</h4>
        </tr>
      </table>
    </div>
  );
};

export default MonthlyExpenses;
