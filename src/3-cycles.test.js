import { sumFrom50to100, multiBy7, average } from "./3-cycles";

describe("sumFrom50to100", () => {
  it("is a functions", () => {
    expect(sumFrom50to100).toBeInstanceOf(Function);
  });
  it("total sum", () => {
    expect(sumFrom50to100()).toBe(3825);
  });
});

describe("multiBy7", () => {
  it("is a functions", () => {
    expect(multiBy7).toBeInstanceOf(Function);
  });
  it("total sum", () => {
    expect(multiBy7()).toEqual([
      "7 * 1=7",
      "7 * 2=14",
      "7 * 3=21",
      "7 * 4=28",
      "7 * 5=35",
      "7 * 6=42",
      "7 * 7=49",
      "7 * 8=56",
      "7 * 9=63",
    ]);
  });
});

describe("average", () => {
  it("is a functions", () => {
    expect(average).toBeInstanceOf(Function);
  });

  it("1+3=4", () => {
    jest.spyOn(window, "prompt").mockReturnValue(5);
    expect(average()).toBe(9);
  });
});
