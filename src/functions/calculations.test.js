import Calculations from './Calculations';

describe("test our calulcation functions", () => {

    var array = [];
    beforeAll(() => {
        array = [10, 11, 12, 11];
    })

    test("Make sure array is what we expect...", () => {
        expect(array).toEqual([10, 11, 12, 11]);
    })

    test("ensure our function to not return undefined...", () =>{
        expect(Calculations(array)).not.toBeNull();
        expect(Calculations(array)).not.toBeUndefined();
    })

    test("Run test for calculateAverage function to calculate the average of an array...", () => {
        expect(Calculations(array)).toBe(11);
    })
})