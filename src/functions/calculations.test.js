import countTogether from './Calculations';

describe("test our calulcation functions", () => {

    describe("sum something...", () => {
        test("calc 4 + 4", () => {
            expect(countTogether(4, 4)).toBe(8);
        })

        test("calc", () => {
            expect(countTogether("4", "4")).toBe(8);
        })
    })
})