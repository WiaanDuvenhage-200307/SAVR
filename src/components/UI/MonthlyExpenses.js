import React from 'react';
import Dropdown from './Dropdown';
import Button from './Button';
import Input from './Input';

const MonthlyExpenses = () => {
    return (
        <div className="month-expenses">
            <div className="row">
                <h1>Monthly Expenses</h1>
                <Dropdown/>
            </div>
            <table className='table'>
                <tr>
                    <th>Household Member</th>
                    <th>Expense</th>
                    <th>Expense Type</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td><Dropdown/></td>
                    <td><Input className='month-expenses-input' ariaLabel='expense-input' type='text' placeholder='Please Enter'/></td>
                    <td><Dropdown/></td>
                    <td>$<Input className='month-expenses-input' ariaLabel='expense-input' type='number' placeholder='Amount'/></td>
                </tr>

            </table>
        </div>
    );
};

export default MonthlyExpenses;