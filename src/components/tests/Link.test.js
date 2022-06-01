import renderer from 'react-test-renderer';
import Link from '../classActivities/Link';

// Test to see if our component rendered correctly
describe('Testing the link component....', () => { 

    test("change the color of the anchor tag...", () => {
        //1. Create/render our component (as you would in the return of a component)
        const component = renderer.create(
            <Link page="https://facebook.com">Facebook</Link>
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

    test("change the color of the anchor tag on leave...", () => {
        //1. Create/render our component (as you would in the return of a component)
        const component = renderer.create(
            <Link page="https://facebook.com">Facebook</Link>
        );

        // Rendering the component as json so we can investigate it
        let tree = component.toJSON();

        // Test to see if our component renders correctly - check did it render correctly by just creating the
        expect(tree).toMatchSnapshot();

        // 2. We simulate interaction with the component

        // trigger the hover of our component
        renderer.act(() => {
            tree.props.onMouseLeave();
        });

        // re-render the tree
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

})
