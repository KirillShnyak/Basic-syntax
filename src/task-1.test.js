import { sumMult } from "./task-1";

describe("sumMult", () => {
  it("return sum and mult", () => {
    expect(sumMult(5, 2)).toEqual("7, 10");
  });
});
// it('adds 1 + 2 and 1 * 2 to equal 3, 2', () => {
//   expect(sumMult(1, 2)).toBe('3, 2');
// });

// const characters = require('./task-1');

// it('adds Hallo world to equal 10', () => {
//     expect(sumMult('Hallo', 'world')).toBe(10);
//   });
