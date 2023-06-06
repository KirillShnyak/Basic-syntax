export function diff(a, b) {
  let difference;
  if (a > b) {
    difference = a - b;
    return difference;
  }
  difference = b - a;
  return difference;
}

export function isWord(string) {
  const regex = /\d|([A-Za-z]\s[A-Za-z])/;
  return !regex.test(string);
}

export function pow(a, x) {
  return a ** x;
}
