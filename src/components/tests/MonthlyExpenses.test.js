import MonthlyExpenses from "../MonthlyExpenses";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

describe("Checking to see if our table inputs are working correctly...", () => {

    beforeEach(() => {
        render(<MonthlyExpenses/>)
    })
    test("Checking to see if our inputs are empty...", () => {
        const fullNameInput = screen.getByLabelText(/expense-name/i); //targeting the 'names' input
        const amountInput = screen.getByLabelText(/expense-amount/i); //targeting the 'income' input

        expect(fullNameInput.value).toBe(""); //checking to see if the input is empty
        expect(amountInput.value).toBe(""); //checking to see if the input is empty
    })

    test("Testing to see if all months are inside of Dropdown...", () => {
        expect(screen.getAllByRole('option').length).toBe(12);
    })

    test("checking to see if the dropdown interacts correctly...", () => {
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByText("January"),
        )

        expect(screen.getByText("January")).toBeInTheDocument();
        expect(screen.getByText("December")).toBeInTheDocument();
    })
})
