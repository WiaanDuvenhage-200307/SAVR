import React from 'react';
import Button from './UI/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react';
import Input from './UI/Input';

const HouseholdIncome = () => {

    const [formValues, setFormValues] = useState([0]);

    const [status, setStatus] = useState("normal");

    const handleInputChange = (newNumber, index) => {
        let changingFormValue = formValues;
        changingFormValue[index] = newNumber;

        console.log(changingFormValue);
        setFormValues(changingFormValue);
    }
    
    const addNewNumber  = () =>{
        setFormValues([...formValues, 0])
    }

    
    const removeNumberFromArray = (index) => {
        var changingFormValue = formValues;
        setFormValues(changingFormValue.splice(index, 1));
        console.log("clicked");
    }

    return (
        <div className='house-income'>
            <h1 className='house-income__heading'>HOUSEHOLD INCOME</h1>
            <div className='house-income__members'>
                {formValues.map((number, index) => (
                    <div key={index}>
                        <Input className='house-income-input' onChange={(e) => handleInputChange(e.target.value)} ariaLabel='names' type='text' placeholder='Full Name'/>
                        <label htmlFor='amount'>$</label>
                        <Input className='house-income-input' onChange={(e) => handleInputChange(+e.target.value)} name='amount' ariaLabel='income' type='text' placeholder='Amount'/>
                        <IconButton aria-label="delete" onClick={removeNumberFromArray}><DeleteIcon/></IconButton>
                    </div>
                ))}
                
            </div>
            <Button function={()=> addNewNumber(true)}  name="Add Member" className="button" onMouseEnter={() => setStatus("hovered")} onMouseLeave={() => setStatus("normal")} role="Button" btnName="addMemberBtn"/>
        </div>
    );
};

export default HouseholdIncome;