import { sumMult, characters, digitSum } from "./1-linear-algorithms";

describe("sumMult", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });
  it("return sum and mult", () => {
    jest.spyOn(window, "prompt").mockReturnValue("5, 2");

    sumMult();

    expect(window.alert).toHaveBeenCalledWith("7, 10");
  });
});

describe("characters", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });
  it("return сharacters", () => {
    jest.spyOn(window, "prompt").mockReturnValue("Hallo world");

    characters();

    expect(window.alert).toHaveBeenCalledWith(10);
  });
});

describe("digitSum", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });
  it("digit sum 123 = 6", () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");

    digitSum();

    expect(window.alert).toHaveBeenCalledWith(6);
  });
});
