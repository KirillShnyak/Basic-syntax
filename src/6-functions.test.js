import { diff, isWord, pow } from "./6-functions";

describe("diff", () => {
  it("the difference between 4 and 2 is 2", () => {
    expect(diff(4, 2)).toBe(2);
  });
  it("the difference between -3 and 0 is 3", () => {
    expect(diff(-3, 0)).toBe(3);
  });
  it("the difference between -5 and 5 is 10", () => {
    expect(diff(-5, 5)).toBe(10);
  });
});

describe("isWord", () => {
  it("if one word return true", () => {
    expect(isWord("Hallo")).toBe(true);
  });
  it("if more then one word return false", () => {
    expect(isWord("Hallo world")).toBe(false);
  });
  it("if one word return true", () => {
    expect(isWord(" Hallo  ")).toBe(true);
  });
});

describe("pow", () => {
  it("2 to the second power is 4", () => {
    expect(pow(2, 2)).toBe(4);
  });
  it("2 to the second power is 4", () => {
    expect(pow(4, 3)).toBe(64);
  });
});
