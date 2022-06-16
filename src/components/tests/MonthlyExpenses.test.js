import MonthlyExpenses from "../MonthlyExpenses";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

describe("Checking to see if our table inputs are working correctly...", () => {
    test("Checking to see if our inputs are empty...", () => {
        render(<MonthlyExpenses/>)
        const fullNameInput = screen.getByLabelText(/name/i); //targeting the 'names' input
        const expenseInput = screen.getByLabelText(/expense-input/i);
        const amountInput = screen.getByLabelText(/amount/i); //targeting the 'income' input

        expect(fullNameInput.value).toBe(""); //checking to see if the input is empty
        expect(expenseInput.value).toBe(""); //checking to see if the input is empty
        expect(amountInput.value).toBe(""); //checking to see if the input is empty
    })

    test("Checking to see if input behaviour is normal", () => {
        render(<MonthlyExpenses/>);
        const fullNameInput = screen.getByLabelText(/name/i);
        const expenseInput = screen.getByLabelText(/expense-input/i);
        const amountInput = screen.getByLabelText(/amount/i);

        userEvent.type(fullNameInput, "Wiaan Duvenhage"); // typing in values to 'names' input
        userEvent.type(expenseInput, "Groceries"); // typing in values to 'names' input
        userEvent.type(amountInput, "3600");

        expect(fullNameInput.value).toBe("Wiaan Duvenhage");
        expect(expenseInput.value).toBe("Groceries");
        expect(amountInput.value).toBe("3600");
    })
})
