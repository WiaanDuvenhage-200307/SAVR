import SumForm from '../SumForm';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
// describe("A suite", function() {
// it("contains spec with an expectation", function() {
//  expect(true).toBe(true);
// });
//});

describe('testing our form interaction', () => {
    test('make sure our inputs are empty when component is rendered', () => {
        //1) Render
        render(<SumForm />);
        //2)Query our elements (getElementBy...)/ Role of input field is textbox
        // const inputElement = screen.getByRole("textbox");
        // const inputElement = screen.getByRole("textbox", { name: /numberOne/i });
        const inputNumberOneElement = screen.getByLabelText(/numberOne/i)
        const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i)
        // the i at the end of the test means the i at the end is an instruction to perform case insensitive comparision

        //3) Now that we have the element, do something, check something with assertion. Expect this inputelements value to be emptry string
        expect(inputNumberOneElement.value).toBe("");
        expect(inputNumberTwoElement.value).toBe("");
    })

    //interact with components to see if they update
    test("test if values are updated correctly...", () => {
        //1) render our component
        render(<SumForm />);

        //2)select our components
        const inputNumberOneElement = screen.getByLabelText(/numberOne/i)
        const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i)

        //3) call the user  events to interact with our components
        userEvent.type(inputNumberOneElement, "2");
        userEvent.type(inputNumberTwoElement, "4");

        // 4) check if it behaved as expected
        expect(inputNumberOneElement.value).toBe("2");
        expect(inputNumberTwoElement.value).toBe("4");

    })

    test("Check if our button calc works...", () => {
        //1) render our component
        render(<SumForm />);

        //2)select our components
        const inputNumberOneElement = screen.getByLabelText(/numberOne/i)
        const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i)

        //3) call the user  events to interact with our components
        userEvent.type(inputNumberOneElement, "2");
        userEvent.type(inputNumberTwoElement, "4");

        //4) Query our button element
        const calculateButton = screen.getByRole("button", {name: /submit/i})

        //5) Click on the button element user event
        userEvent.click(calculateButton);

        //6) Check if calc was successful
        const resultElement = screen.getByText("the sum is:", {exact: false});

        //7) Check if result element exists
        expect(resultElement.textContent).toBe("the sum is: 6");
        // expect(resultElement).toBeInTheDocument();
    })
});

//test in terminal: ABSOLETE is for SNAPSHOTS