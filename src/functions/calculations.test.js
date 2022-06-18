import {countTogether} from './Calculations';
import {average} from './Calculations';
import {tax} from './Calculations';

describe("test our calulcation functions", () => {
    test('count numbers together', () => {
        var array = [10, 12];
        expect(countTogether(array)).toBe(22);
    })

    test("calculate the average", () => {
        var averageArr = [4, 4, 4];
        expect(average(averageArr)).toBe(4);
    })

    test("calculate tax", () => {
        var num = 50;
        expect(tax(num)).toBe(0.5);
    })
})