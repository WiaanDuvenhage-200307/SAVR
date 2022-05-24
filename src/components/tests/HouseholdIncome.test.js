import HouseholdIncome from "../UI/HouseholdIncome";
import { render, screen } from "@testing-library/react";

describe("Testing our form interaction...", () => {

    test("checking to see if our inputs are empty...", () => {
        render(<HouseholdIncome/>) //rendering in the HouseHoldIncome Component

        const fullNameInput = screen.getByLabelText(/names/i); //targeting the 'names' input
        const amountInput = screen.getByLabelText(/income/i); //targeting the 'income' input

        expect(fullNameInput.value).toBe(""); //checking to see if the input is empty
        expect(amountInput.value).toBe(""); //checking to see if the input is empty
    })
})
