export function userAge(user) {
  user.age = prompt("Enter user age: ");
}

export function adminclone(user) {
  const admin = { ...user, role: "admin" };
  return admin;
}
