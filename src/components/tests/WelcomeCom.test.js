import { render, screen } from "@testing-library/react";
import WelcomeCom from "../WelcomeCom"

describe("Testing if our welcome message", () => {
    test("Checking to see if heading tag renders correctly", () => {
        render(<WelcomeCom/>);

        const text = screen.getByText("Plan your budget and become a SAVR");

        expect(text).toBeInTheDocument();
    })

    test("Checking to see if secondary text renders correctly", () => {
        render(<WelcomeCom/>);

        const text = screen.getByText('Calculate your monthly expenses and plan your "financial spreadsheet".');

        expect(text).toBeInTheDocument();
    })
})