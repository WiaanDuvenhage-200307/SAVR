import React from 'react'

export default function TaxBracket() {
  return (
    <div className='tax-bracket'>
        <h1>The Tax Bracket</h1>
        <table className='tax-table'>
            <tr>
                <th>Income</th>
                <th>Tax%</th>
            </tr>
            <tr>
                <td>0-100 $</td>
                <td>1% of income</td>
            </tr>
            <tr>
                <td>101-300 $</td>
                <td>15% of income</td>
            </tr>
            <tr>
                <td>301-500 $</td>
                <td>20% of income</td>
            </tr>
        </table>
    </div>
  )
}
