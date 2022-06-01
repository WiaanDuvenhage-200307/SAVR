import React from 'react';
import Button from './UI/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react';
import Input from './UI/Input';

const HouseholdIncome = () => {

    const [input, setInputs] = useState([]);

    const addNewMember = () => {

    }

    return (
        <div className='house-income'>
            <h1 className='house-income__heading'>HOUSEHOLD INCOME</h1>
            <div className='house-income__members'>
                <Input className='house-income-input' ariaLabel='names' type='text' placeholder='Full Name'/> 
                <div className='house-income_delete'>
                    <h2>$</h2>
                    <Input className='house-income-input' ariaLabel='income' type='number' placeholder='Amount'/>
                    <IconButton aria-label="delete"><DeleteIcon/></IconButton>
                </div>
                
            </div>
            <Button onClick={addNewMember} name="Add Member" className="button"/>
        </div>
    );
};

export default HouseholdIncome;