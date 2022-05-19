import React, { useState } from "react";

export default function SumForm() {

    const [numberOne, setNumberOne] = useState('');
    const [numberTwo, setNumberTwo] = useState('');

    const[result, setResult] = useState('');

    const doSumCalculations = (e) => {
        e.preventDefault();

        let calc = (+numberOne) + (+numberTwo);

        setResult(calc);
    }

    return (
        <div>
            <form onSubmit={doSumCalculations}>
                <input name="numberOne" aria-label="numberOne" type={"text"} onChange={(e) => setNumberOne(e.target.value)}/>
                <input name="numberTwo" aria-label="numberTwo" type={"text"} onChange={(e) => setNumberTwo(e.target.value)}/>
                <input type="submit" name="submit" />
            </form>

            <span>the sum is: {result}</span>
        </div>
    )
}

//      <input name="numberTwo" type="text" /> --- this will fail and give an error
// because of -screen.getbyrole- in test.js. ::: add another param after "textbox", {name: /numberOne/i}
// "the i at the end is an instruction to perform case insensitive comparision"