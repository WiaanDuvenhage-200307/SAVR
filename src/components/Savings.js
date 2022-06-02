import React from 'react';
import Graph from '../assets/save.svg';
import Input from './UI/Input';

export default function Savings() {
  return (
    <div className='savings'>
        <div className="left">
            <h1>Savings</h1>
            <h2>To become a real SAVR, you need to plan how you much you are going <br /> to save up.
                Enter below the percentage of your budget that you <br /> want to save.
            </h2>
            <img src={Graph} width={500} style={{marginLeft: "100px"}}/>
        </div>
        <div className="right">
            <div className="card">
                <h1>$2345</h1>
                <label htmlFor="savings-input">How much do you want to save</label>
                <Input ariaLabel='savings-input' type='number' placeholder='how much?'/>
                <h2>January</h2>
            </div>
            <div className="card">
                <h1>$2345</h1>
                <label htmlFor="savings-input">How much do you want to save</label>
                <Input ariaLabel='savings-input' type='number' placeholder='how much?'/>
                <h2>January</h2>
            </div>
            <div className="card">
                <h1>$2345</h1>
                <label htmlFor="savings-input">How much do you want to save</label>
                <Input ariaLabel='savings-input' type='number' placeholder='how much?'/>
                <h2>January</h2>
            </div>
            <div className="card">
                <h1>$2345</h1>
                <label htmlFor="savings-input">How much do you want to save</label>
                <Input ariaLabel='savings-input' type='number' placeholder='how much?'/>
                <h2>January</h2>
            </div>
            <div className="card">
                <h1>$2345</h1>
                <label htmlFor="savings-input">How much do you want to save</label>
                <Input ariaLabel='savings-input' type='number' placeholder='how much?'/>
                <h2>January</h2>
            </div>
            <div className="card">
                <h1>$2345</h1>
                <label htmlFor="savings-input">How much do you want to save</label>
                <Input ariaLabel='savings-input' type='number' placeholder='how much?'/>
                <h2>January</h2>
            </div>
            <div className="card">
                <h1>$2345</h1>
                <label htmlFor="savings-input">How much do you want to save</label>
                <Input ariaLabel='savings-input' type='number' placeholder='how much?'/>
                <h2>January</h2>
            </div>
        </div>

    </div>
  )
}
