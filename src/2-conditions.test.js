import { largestNum, whatIsMonth, circleInSquare } from "./2-conditions";

describe("largestNum", () => {
  it("2 is more than 1", () => {
    expect(largestNum(1, 2)).toBe(2);
  });
  it("0 is more than -10", () => {
    expect(largestNum(-10, 0)).toBe(0);
  });
});

describe("whatIsMonth", () => {
  it("March is the third month", () => {
    jest.spyOn(window, "prompt").mockReturnValue("3");
    whatIsMonth();
    expect(whatIsMonth()).toBe("March");
  });
  it("July is the seventh month", () => {
    jest.spyOn(window, "prompt").mockReturnValue("7");
    whatIsMonth();
    expect(whatIsMonth()).toBe("July");
  });
});

describe("circleInSquare", () => {
  it("a circle with an area of 2 fit into a square with an area of 6", () => {
    expect(circleInSquare(2, 6)).toBe("Fit!");
  });
  it("a circle with an area of 7 do not fit into a square with an area of 8", () => {
    expect(circleInSquare(7, 8)).toBe("Do not fit!");
  });
});
