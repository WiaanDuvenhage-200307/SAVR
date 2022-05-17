import React from 'react';
import Dropdown from './Dropdown';

const MonthlyExpenses = () => {
    return (
        <div className="month-expenses">
            <div className="row">
                <h1>Monthly Expenses</h1>
                <Dropdown/>
            </div>
        </div>
    );
};

export default MonthlyExpenses;