import { getDayOfWeek, getMinutes, whoIsOlder } from "./8-date";

describe("getDayOfWeek", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  it("9.06.2023 is friday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("09.06.2023");
    getDayOfWeek();
    expect(window.alert).toHaveBeenCalledWith("Friday");
  });
  it("02.07.1992 is Thursday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("02.07.1992");
    getDayOfWeek();
    expect(window.alert).toHaveBeenCalledWith("Thursday");
  });
});

describe("getMinutes", () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now - today;
  const minutes = Math.floor(diff / 60000);
  it("how many minutes have passed since the beginning of today", () => {
    expect(getMinutes()).toEqual(minutes);
  });
});

describe("whoIsOlder", () => {
  it("first user is older", () => {
    const firstDate = "02.07.1992";
    const secondDate = "29.06.1994";
    expect(whoIsOlder(firstDate, secondDate)).toBe("first user is older");
  });

  it("second user is older", () => {
    const firstDate = "02.07.1992";
    const secondDate = "01.12.1990";
    expect(whoIsOlder(firstDate, secondDate)).toBe("second user is older");
  });

  it("first user and second user is peers", () => {
    const firstDate = "20.02.2002";
    const secondDate = "20.02.2002";
    expect(whoIsOlder(firstDate, secondDate)).toBe("PEERS!");
  });
});
