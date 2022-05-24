import React from 'react';
import Button from './Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react';

const HouseholdIncome = () => {

    const [input, setInputs] = useState([]);

    const addNewMember = () => {

    }

    return (
        <div className='house-income'>
            <h1 className='house-income__heading'>HOUSEHOLD INCOME</h1>
            <div className='house-income__members'>
                <input aria-label='names' type="text" name="names" id="names" placeholder='Full Name'/> 
                <div className='house-income_delete'>
                    <h2>$</h2>
                    <input aria-label='income' type="number" name="income" id="income" placeholder='Amount'/>
                    <IconButton aria-label="delete"><DeleteIcon/></IconButton>
                </div>
                
            </div>
            <Button onClick={addNewMember} name="Add Member" className="button"/>
        </div>
    );
};

export default HouseholdIncome;