import { screen, render } from "@testing-library/react";
import TheDate from "../TheDate";

describe("testing our date component", () => {
    test("Testing to see if our date renders as today", () => {
        render(<TheDate/>)
        const date = screen.getByLabelText(/date/i);

        expect(date).toBeInTheDocument(); 
    })
})
