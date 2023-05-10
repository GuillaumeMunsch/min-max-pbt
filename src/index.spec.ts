import fc from "fast-check";
import { range, minmax } from ".";

describe("Min max", () => {
  test("Number should be a valid unsigned integer", function () {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (min, max): boolean => {
        fc.pre(min < max);
        const value = minmax({ min, max });
        return Number.isInteger(value) && value >= 0;
      })
    );
  });

  test("Number should be bigger than the min", function () {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (min, max): boolean => {
        fc.pre(min < max);
        const value = minmax({ min, max });
        return value >= min;
      })
    );
  });

  test("Number should be smaller than the max", function () {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (min, max): boolean => {
        fc.pre(min < max);
        const value = minmax({ min, max });
        return value <= max;
      })
    );
  });

  test("Number should be smaller than the max", function () {
    const valueArray = [];
    const min = 0;
    const max = 20;
    for (let i = 0; i < 1000; i++) {
      valueArray.push(minmax({ min, max }));
    }
    return expect(valueArray.some((value) => value > 15)).toBe(true);
  });
});

describe("Range", () => {
  test("Should create a range from 1 to X", function () {
    fc.assert(
      fc.property(fc.nat(), (x): boolean => {
        const generatedRange = range(x);
        return generatedRange.min === 1 && generatedRange.max === x;
      })
    );
  });
});