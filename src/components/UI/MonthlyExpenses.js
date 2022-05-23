import React from 'react';
import Dropdown from './Dropdown';
import Button from './Button';

const MonthlyExpenses = () => {
    return (
        <div className="month-expenses">
            <div className="row">
                <h1>Monthly Expenses</h1>
                <Dropdown/>
                <Button className="button" name="Add Expense"/>
            </div>
        </div>
    );
};

export default MonthlyExpenses;