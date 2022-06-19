import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaxBracket from '../TaxBracket';

describe("Testing our Tax Bracket Component", () => {

    test("Checking to see if our table has rendered", () => {
        render(<TaxBracket/>);
        const tableHeading1 = screen.getByText("Income");
        const tableHeading2 = screen.getByText("Tax%");

        expect(tableHeading1).toBeInTheDocument(); 
        expect(tableHeading2).toBeInTheDocument(); 
    })
})