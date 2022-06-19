
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import IncomeAfterTax from "../IncomeAfterTax";

describe("Tesing our Income After Taxes component", () => {
    test("checking to see if our input is empty", () => {
        render(<IncomeAfterTax/>);

        const input = screen.getByLabelText(/incomeInput/i);

        expect(input.value).toBe("");
    })

    test("checking to see if input behaviour is normal", () => {
        render(<IncomeAfterTax/>);

        const input = screen.getByLabelText(/incomeInput/i);

        userEvent.type(input, "3600");

        expect(input.value).toBe("3600"); 
    }) 

    test("checking to see if our button text is rendering correctly", () => {
        render(<IncomeAfterTax/>);
        const button = screen.getByRole('button');

        expect(button.innerHTML).toBe("Add Tax");
    })

    test("Checking to see if our table has rendered", () => {
        render(<IncomeAfterTax/>);
        const tableHeading1 = screen.getByText("Income"); 
        const tableHeading2 = screen.getByText("After Tax"); 
        const tableHeading3 = screen.getByText("Applied Tax"); 

        expect(tableHeading1).toBeInTheDocument();
        expect(tableHeading2).toBeInTheDocument();
        expect(tableHeading3).toBeInTheDocument();
    })


})