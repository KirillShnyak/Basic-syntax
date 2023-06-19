export function userAge(user) {
  const userClone = { ...user };
  userClone.age = prompt("Enter user age: ");
  return userClone;
}

export function adminclone(user) {
  const admin = { ...user, role: "admin" };
  return admin;
}
