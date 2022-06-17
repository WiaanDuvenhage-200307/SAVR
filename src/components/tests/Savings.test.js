import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Savings from "../Savings";

describe("testing our savings component", () => {

    describe("Checking to see if our input behaves correctly", () => {
        test("checking to see if all dropdowns are there", () => {
            render(<Savings/>)
            expect(screen.getAllByRole('option').length).toBe(12);
        })

        test("checking to see if the dropdown interacts correctly...", () => {
            render(<Savings/>)
            userEvent.selectOptions(
                screen.getByRole('combobox'),
                screen.getByText("Jan"),
            )
    
            expect(screen.getByText("Jan")).toBeInTheDocument();
            expect(screen.getByText("Dec")).toBeInTheDocument();
        })
    })

    test("check to see if our inputs are empty", () => {
        render(<Savings/>);
        const incomeInput = screen.getByLabelText(/incomeAmount/i);
        const percentInput = screen.getByLabelText(/savingPercent/i);

        expect(incomeInput.value).toBe("");
        expect(percentInput.value).toBe("");
    })

    test("checking to see if input behaviour is as expected", () => {
        render(<Savings/>);
        const incomeInput = screen.getByLabelText(/incomeAmount/i);
        const percentInput = screen.getByLabelText(/savingPercent/i);

        userEvent.type(incomeInput, "12000");
        userEvent.type(percentInput, "12");

        expect(incomeInput.value).toBe("12000");
        expect(percentInput.value).toBe("12");
    })

    test("Checking to see if our table has rendered", () => {
        render(<Savings/>);
        const tableHeading1 = screen.getByText("Month");
        const tableHeading2 = screen.getByText("Income");
        const tableHeading3 = screen.getByText("Percentage Saved");
        const tableHeading4 = screen.getByText("Saved Amount");

        expect(tableHeading1).toBeInTheDocument();
        expect(tableHeading2).toBeInTheDocument();
        expect(tableHeading3).toBeInTheDocument();
        expect(tableHeading4).toBeInTheDocument();
    })
})