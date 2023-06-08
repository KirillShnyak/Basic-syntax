import { getApp } from "./7-dom";

describe("getApp", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
  });

  it("getApp is a function", () => {
    expect(getApp).toBeInstanceOf(Function);
  });
  it("creates proper initial markup", () => {
    getApp(el);
    expect(el.querySelector("input")).not.toBe(null);
  });
});
