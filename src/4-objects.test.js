import { userAge, adminclone } from "./4-objects";

describe("userAge", () => {
  let user;
  let admin;
  // let age;
  // let name;
  // let role;

  beforeEach(() => {
    user = { name: "Jhon" };
    jest.spyOn(window, "prompt").mockReturnValue(18);
    userAge(user);
    adminclone(user, admin);
    // admin = { ...user, role: "admin" };
    // age = admin.age;
    // name = admin.name;
    // role = admin.role;
  });

  it("is a functions", () => {
    expect(userAge).toBeInstanceOf(Function);
  });

  it("user age to be true", () => {
    expect(user.age).toBeTruthy();
  });

  it("user is 18 ears old", () => {
    expect(user.age).toBe(18);
  });
});

describe("adminclone", () => {
  let user;
  let admin;
  let age;
  let name;
  let role;

  beforeEach(() => {
    user = { name: "Jhon" };
    jest.spyOn(window, "prompt").mockReturnValue(18);
    userAge(user);
    admin = adminclone(user);
    age = admin.age;
    name = admin.name;
    role = admin.role;
  });
  it("admin is true", () => {
    expect(admin.age).toBe(18);
  });

  it("admin role is 'admin'", () => {
    expect(admin.role).toBe("admin");
  });

  it("user role is folse", () => {
    expect(user.role).not.toBeTruthy();
  });

  it("age is 18", () => {
    expect(age).toBe(18);
  });

  it("name is Jhon", () => {
    expect(name).toBe("Jhon");
  });

  it("role is admin", () => {
    expect(role).toBe("admin");
  });
});
