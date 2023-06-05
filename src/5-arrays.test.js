import { sumNumInArr, minMax } from "./5-arrays";

describe("sumNumInArr", () => {
  let a;
  let b;

  beforeEach(() => {
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sumNumInArr(a);
    b = a.map((i) => i * 2);
  });

  it("total sum a", () => {
    expect(sumNumInArr(a)).toBe(55);
  });

  it("a[1]*2 = b[1]", () => {
    expect(a[0] * 2 === b[0]).toBeTruthy();
  });
});

describe("minMax", () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  minMax(a);

  it("min and max numbers of first array", () => {
    expect(minMax(a)).toBe("1, 10");
  });
});
