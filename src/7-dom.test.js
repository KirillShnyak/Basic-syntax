import { getApp } from "./7-dom";

describe("getApp", () => {
  let el;
  let input;
  let button;

  beforeEach(() => {
    el = document.createElement("div");
    getApp(el);
    input = el.querySelector("input");
    button = el.querySelector("button");
  });

  function getPharagraphs() {
    return [...el.querySelectorAll("p")].map((p) => p.innerHTML);
  }

  function isButtonHidden() {
    return button.hidden;
  }

  function changeInputValue(value) {
    input.value = value;
    input.dispatchEvent(new Event("input"));
  }

  function clickButton() {
    button.click();
  }

  function getInputValue() {
    return input.value;
  }

  it("getApp is a function", () => {
    expect(getApp).toBeInstanceOf(Function);
  });
  it("creates proper initial markup", () => {
    expect(input).not.toBe(null);
    expect(button).toBeTruthy();
    expect(getPharagraphs()).toEqual(["1", "2", "3"]);
  });

  it("show button with enterd text", () => {
    changeInputValue(123);
    expect(isButtonHidden()).toBe(false);

    changeInputValue("");
    expect(isButtonHidden()).toBe(true);
  });

  it("adds paragraph to the begining on pressing button with entered text", () => {
    const value = `${Math.random()}`;
    changeInputValue(value);
    clickButton();
    expect(getPharagraphs()).toEqual([value, "1", "2", "3"]);
  });

  it("clears input on adding paragraph and hides the button", () => {
    const value = `${Math.random()}`;
    changeInputValue(value);
    clickButton();
    expect(getInputValue()).toBe("");
    expect(isButtonHidden()).toBe(true);
  });

  it("keeps max 5 pharagraphs", () => {
    const value = `${Math.random()}`;
    changeInputValue(value);
    clickButton();
    const value2 = `${Math.random()}`;
    changeInputValue(value2);
    clickButton();
    const value3 = `${Math.random()}`;
    changeInputValue(value3);
    clickButton();
    expect(getPharagraphs()).toEqual([value3, value2, value, "1", "2"]);
  });
});
