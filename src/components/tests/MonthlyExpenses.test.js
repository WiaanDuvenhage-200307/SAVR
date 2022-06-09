import MonthlyExpenses from "../MonthlyExpenses";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

describe("Checking to see if our table inputs are working correctly...", () => {
    test("Checking to see if our inputs are empty...", () => {
        render(<MonthlyExpenses/>)
        const fullNameInput = screen.getByLabelText(/name/i); //targeting the 'names' input
        const amountInput = screen.getByLabelText(/amount/i); //targeting the 'income' input

        expect(fullNameInput.value).toBe(""); //checking to see if the input is empty
        expect(amountInput.value).toBe(""); //checking to see if the input is empty
    })

    // test("checking to see if inputs behavious is normal...", () => {
    //     const fullNameInput = screen.getByLabelText(name)
    // })
})
