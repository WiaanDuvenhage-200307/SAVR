import React from "react";
import { useState } from "react";
import { countTogether } from "../functions/Calculations";

const HouseholdIncome = () => {
  const [formValues, setFormValues] = useState([]);

  const [status, setStatus] = useState("normal");

  const [inputList, setInputList] = useState([{ names: "", income: "" }]);

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

    setInputList([...inputList, { names: "", income: ""}]);


    for (let i = 0; i < inputList.length; i++){

        arr.push(+inputList[i].income);
        console.log(arr);

        setTotal(countTogether(arr));
        console.log(+total);
    }


  };

  return (
    <div className="house-income">
      <h1 className="house-income__heading">Household Income</h1>
      {inputList.map((x, i) => {
        return (
          <div>
            <div className="house-income__members">
              <input
                className="house-income-input"
                name="names"
                aria-label="name"
                placeholder="Name"
                value={x.names}
                onChange={(e) => handleInputChange(e, i)}
              />
              <input
                className="house-income-input"
                name="income"
                aria-label="income"
                placeholder="Income"
                value={x.income}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>

            {inputList.length !== 1 && (
              <button className="button removeMember" onClick={() => handleRemoveClick(i)}>
                Remove
              </button>
            )}
            {inputList.length - 1 === i && (
              <button className="button addMember" onClick={handleAddClick}>
                Add Member
              </button>
            )}
            
          </div>
        );
      })}
      <h4 className="household-total">Total : ${total}</h4>
    </div>
  );
};

export default HouseholdIncome;
