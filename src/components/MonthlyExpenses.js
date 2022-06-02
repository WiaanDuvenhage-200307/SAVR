import React, { useState } from 'react';
import Dropdown from './UI/Dropdown';
import Button from './UI/Button';
import Input from './UI/Input';

const MonthlyExpenses = () => {

    const [tableValues, setTableValues] = useState([0]);

    const addNewRow = () => {
        setTableValues([...tableValues, 0])
    }

    const handleInputChange = (newNumber, index) => {
        let changingFormValue = tableValues;
        changingFormValue[index] = newNumber;

        console.log(changingFormValue);
        setTableValues(changingFormValue);
    }

    return (
        <div className="month-expenses">
            <div className="row">
                <h1>Monthly Expenses</h1>
                <Dropdown />
            </div>
            <table className='table'>
                <tr>
                    <th>Household Member</th>
                    <th>Expense</th>
                    <th>Expense Type</th>
                    <th>Amount</th>
                </tr>
                {tableValues.map((number, index) =>(
                    <tr>
                        <td></td>
                        <td><Input className='month-expenses-input' onChange={(e) => handleInputChange(e.target.value)} ariaLabel='expense-name' type='text' placeholder='Please Enter'/></td>
                        <td></td>
                        <td><p>$</p><Input className='month-expenses-input' onChange={(e) => handleInputChange(+e.target.value)} ariaLabel='expense-amount' type='number' placeholder='Amount'/></td>
                    </tr>
                ))}

                <tr><Button function={()=> addNewRow(true)} name="Add Expense" className="button"/></tr>
            </table>
        </div>
    );
};

export default MonthlyExpenses;