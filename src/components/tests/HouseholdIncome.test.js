import HouseholdIncome  from "../HouseholdIncome";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Button from '../UI/Button';

describe("Testing our form interaction...", () => {

    test("checking to see if our inputs are empty...", () => {
        render(<HouseholdIncome/>);
        const fullNameInput = screen.getByPlaceholderText(/Name/i); //targeting the 'names' input
        const amountInput = screen.getByPlaceholderText(/Income/i); //targeting the 'income' input

        expect(fullNameInput.value).toBe(""); //checking to see if the input is empty
        expect(amountInput.value).toBe(""); //checking to see if the input is empty
    })

    test("checking to see if the value we type gets read...", () => {
        render(<HouseholdIncome/>);
        const fullNameInput = screen.getByLabelText(/name/i); //targeting the 'names' input
        const amountInput = screen.getByLabelText(/Income/i); //targeting the 'income' input

        userEvent.type(fullNameInput, "Wiaan Duvenhage"); // typing in values to 'names' input
        userEvent.type(amountInput, "3452"); // typing in values to 'income' input

        expect(fullNameInput.value).toBe("Wiaan Duvenhage"); //checking to see if the input is reading the value correctly
        expect(amountInput.value).toBe("3452"); //checking to see if the input is reading the value correctly
    })

    test("Testing to see if tapping the button works...", () => {
        render(<HouseholdIncome/>);
        const addButton = screen.getByText(/Add Member/i);

        const clickedBtn =  fireEvent.click(screen.getByText('Add Member'));
    })

    // ? SNAPSHOT
    test("See if button changes color..", () => {
        //1. Create/render our component (as you would in the return of a component)
        const component = renderer.create(
            <Button className="button">Remove</Button>
        );

        // Rendering the component as json so we can investigate it
        let tree = component.toJSON();

        // Test to see if our component renders correctly - check did it render correctly by just creating the
        expect(tree).toMatchSnapshot();

        // 2. We simulate interaction with the component

        // trigger the hover of our component
        renderer.act(() => {
            tree.props.onMouseEnter();
        });

        // re-render the tree
        tree = component.toJSON();
        expect(tree).toMatchSnapshot(); 
    })


})
