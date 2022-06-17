import React from 'react'

export default function IncomeAfterTax() {
  return (
    <div className='incomeAfterTax'>
        <h1>Income After Tax</h1>
        <div className="incomeAfterTaxCon">
            <div className="left">
                <input name='income' type='number' className='house-income-input' placeholder='Income'/>
                <button className='button'>Add Tax</button>
            </div>

            <div className="right">
            </div>
        </div>

        
    </div>
  )
}
