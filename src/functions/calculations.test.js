import countTogether from './Calculations';
import {average} from './Calculations';

describe("test our calulcation functions", () => {
    test('count numbers together', () => {
        var array = [10, 12];
        expect(countTogether(array)).toBe(22);
    })

    test("calculate the average", () => {
        var averageArr = [4, 4, 4];
        expect(average(averageArr)).toBe(4);
    })
})