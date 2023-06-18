export function sumMult(a, b) {
  const sum = a + b;
  const mult = a * b;
  return alert(`${sum}, ${mult}`); // eslint-disable-line
}

export function characters() {
  let words = prompt("Enter two words: "); // eslint-disable-line
  words = words.split(" ");
  const a = words[0];
  const b = words[1];
  return alert(a.length + b.length); // eslint-disable-line
}

export function digitSum() {
  const num = prompt("Enter a three digit number: "); // eslint-disable-line
  /* eslint-disable no-alert */
  return alert(
    num
      .split("")
      .map((digit) => Number(digit))
      .reduce((sum, current) => sum + current, 0)
  );
  /* eslint-disable no-alert */
}
