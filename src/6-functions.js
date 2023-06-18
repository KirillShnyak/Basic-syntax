export function diff(a, b) {
  return Math.abs(a - b);
}

export function isWord(string) {
  const splitString = string.split(" ");
  const stringLength = splitString.length;
  return stringLength === 1;
}

export function pow(a, x) {
  return a ** x;
}
