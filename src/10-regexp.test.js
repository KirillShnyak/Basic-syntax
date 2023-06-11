import { whatInTheString } from "./10-regexp";

describe("whatInTheString", () => {
  it("date in this string", () => {
    jest.spyOn(window, "prompt").mockReturnValue("02.07.1992");
    expect(whatInTheString()).toBe("is a date");
    jest.spyOn(window, "prompt").mockReturnValue("02 июля 1992");
    expect(whatInTheString()).toBe("is a date");
    jest.spyOn(window, "prompt").mockReturnValue("2-07-1992");
    expect(whatInTheString()).toBe("is a date");
    jest.spyOn(window, "prompt").mockReturnValue("02/07/92");
    expect(whatInTheString()).toBe("is a date");
    jest.spyOn(window, "prompt").mockReturnValue("2 7 1992");
    expect(whatInTheString()).toBe("is a date");
  });

  it("email in this string", () => {
    jest.spyOn(window, "prompt").mockReturnValue("mannu.ch@gmail.com");
    expect(whatInTheString()).toBe("is a email");
    jest.spyOn(window, "prompt").mockReturnValue("hero2231@gmail.com");
    expect(whatInTheString()).toBe("is a email");
    jest.spyOn(window, "prompt").mockReturnValue("karanboka@gmail.com");
    expect(whatInTheString()).toBe("is a email");
    jest.spyOn(window, "prompt").mockReturnValue("subha_youare@yahoo.com");
    expect(whatInTheString()).toBe("is a email");
    jest.spyOn(window, "prompt").mockReturnValue("mr.da_s-3@hotmail.com");
    expect(whatInTheString()).toBe("is a email");
    jest.spyOn(window, "prompt").mockReturnValue("mr.das3hotmail.com");
    expect(whatInTheString()).toBe(undefined);
  });

  it("phone number in this string", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+7-987-666-44-88");
    expect(whatInTheString()).toBe("is a phone number");
    jest.spyOn(window, "prompt").mockReturnValue("+79876664488");
    expect(whatInTheString()).toBe("is a phone number");
    jest.spyOn(window, "prompt").mockReturnValue("8(987)6664488");
    expect(whatInTheString()).toBe("is a phone number");
    jest.spyOn(window, "prompt").mockReturnValue("+7(987)666-44-88");
    expect(whatInTheString()).toBe("is a phone number");
    jest.spyOn(window, "prompt").mockReturnValue("243-33-44");
    expect(whatInTheString()).toBe(undefined);
  });
});
