import HouseholdIncome from "../UI/HouseholdIncome";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Testing our form interaction...", () => {

    test("checking to see if our inputs are empty...", () => {
        render(<HouseholdIncome/>) //rendering in the HouseHoldIncome Component

        const fullNameInput = screen.getByLabelText(/names/i); //targeting the 'names' input
        const amountInput = screen.getByLabelText(/income/i); //targeting the 'income' input

        expect(fullNameInput.value).toBe(""); //checking to see if the input is empty
        expect(amountInput.value).toBe(""); //checking to see if the input is empty
    })

    test("checking to see if the value we type gets read...", () => {
        render(<HouseholdIncome/>);

        const fullNameInput = screen.getByLabelText(/names/i); // targeting the 'names' input
        const amountInput = screen.getByLabelText(/income/i); // targeting the 'income' input

        userEvent.type(fullNameInput, "Wiaan Duvenhage"); // typing in values to 'names' input
        userEvent.type(amountInput, "3452"); // typing in values to 'income' input

        expect(fullNameInput.value).toBe("Wiaan Duvenhage"); //checking to see if the input is reading the value correctly
        expect(amountInput.value).toBe("3452"); //checking to see if the input is reading the value correctly
    })
})
