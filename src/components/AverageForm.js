import React, {useState} from 'react';
import Calculations from '../functions/Calculations';

const AverageForm = () => {

    const [formValues, setFormValues] = useState([0, 2]);
    const[currentAverage, setCurrentAverage] = useState();

    const handleInputChange = (newNumber, index) => {
        let changingFormValue = formValues;
        changingFormValue[index] = newNumber;

        console.log(changingFormValue);
        setFormValues(changingFormValue);
    }

    const addNewNumber = () => {
        setFormValues([...formValues, 0])
    }

    const removeNumberFromArray = (index) => {
        var changingFormValue = formValues;
        changingFormValue.splice(index, 1);
        setFormValues(changingFormValue);
        console.log("clicked");
    }

    const doCalculation = () => {
        var average = Calculations(formValues);
        setCurrentAverage(average);
    }
    
    return (
        <div>
            {/* Inputs */}
            {formValues.map((number, index) => (
                <div key={index}>
                    <input onChange={(e) => handleInputChange(+e.target.value, index)} defaultValue={number} name="numbers" type="number"/>
                    <div onClick={removeNumberFromArray}>x</div>
                </div>
            ))}

            {/* Buttons */}
            <div onClick={addNewNumber}>Add New Number</div>
            <div onClick={doCalculation}>Do Average Calculation! {currentAverage}</div>
        </div>
    );
};

export default AverageForm;