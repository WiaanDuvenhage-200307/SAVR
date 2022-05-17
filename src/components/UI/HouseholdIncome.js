import React from 'react';
import Button from './Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

const HouseholdIncome = () => {
    return (
        <div className='house-income'>
            <h1 className='house-income__heading'>HOUSEHOLD INCOME</h1>
            <div className='house-income__members'>
                <h2>John Doe</h2>
                <div className='house-income_delete'>
                    <h2 className='house-income__money'>$ 3900</h2>
                    <IconButton aria-label="delete"><DeleteIcon/></IconButton>
                </div>
            </div>
            <Button name="Add +" className="button"/>
        </div>
    );
};

export default HouseholdIncome;