import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Nav from "../Nav";

describe("Testing our nav bar", () => {

    test("checking to see if our logo is rendering", () => {
        render(<Nav/>);
        const image = screen.getByRole('img');

        expect(image).toHaveAttribute('src', 'Logo.svg');
    })
    
})