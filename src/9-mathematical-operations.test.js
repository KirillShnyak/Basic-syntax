import {
  rightTriangle,
  getCircumferenceAndArea,
  getRootsOfQuadraticEquation,
} from "./9-mathematical-operations";

describe("rightTriangle", () => {
  let a;
  let b;
  let c;
  beforeEach(() => {});
  it("triangle is right angled", () => {
    a = 4;
    b = 5;
    c = 3;
    expect(rightTriangle(a, b, c)).toBe("this triangle is right angled");
  });
  it("triangle is not right", () => {
    a = 4;
    b = 4;
    c = 3;
    expect(rightTriangle(a, b, c)).toBe(
      "this triangle is not a right triangle"
    );
  });
});

describe("getCircumferenceAndArea", () => {
  it("circumference and area of a circle", () => {
    jest.spyOn(window, "prompt").mockReturnValue("5");
    expect(getCircumferenceAndArea()).toBe(
      "circumference is 31.4 and area of a circle is 78.5"
    );
  });
});

describe("getRootsOfQuadraticEquation", () => {
  it("quadratic equation has two roots", () => {
    jest.spyOn(window, "prompt").mockReturnValueOnce("3.2");
    jest.spyOn(window, "prompt").mockReturnValueOnce("-7.8");
    jest.spyOn(window, "prompt").mockReturnValueOnce("1");
    expect(getRootsOfQuadraticEquation()).toBe("x1 = 2.30, x2 = 0.14");
  });

  it("quadratic equation has one root", () => {
    jest.spyOn(window, "prompt").mockReturnValueOnce("2");
    jest.spyOn(window, "prompt").mockReturnValueOnce("4");
    jest.spyOn(window, "prompt").mockReturnValueOnce("2");
    expect(getRootsOfQuadraticEquation()).toBe("x = -1.00");
  });

  it("no roots", () => {
    jest.spyOn(window, "prompt").mockReturnValueOnce("8");
    jest.spyOn(window, "prompt").mockReturnValueOnce("4");
    jest.spyOn(window, "prompt").mockReturnValueOnce("2");
    expect(getRootsOfQuadraticEquation()).toBe("no roots");
  });
});
