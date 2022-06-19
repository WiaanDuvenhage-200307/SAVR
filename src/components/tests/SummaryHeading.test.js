import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryHeading from "../SummaryHeading";

describe("Testing our Summary Heading Component", () => {
    test("Checking to see if the text of the component is rendering on the page", () => {
        render(<SummaryHeading/>);

        const heading = screen.getByText("Summary");
        const subHeading = screen.getByText("A summarised view of your budget.");
        
        expect(heading).toBeInTheDocument();
        expect(subHeading).toBeInTheDocument();
    })
})