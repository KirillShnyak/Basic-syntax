export function sumFrom50to100() {
  let sum = 0;
  for (let i = 50; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

export function multiBy7() {
  const arrMulti = [];
  for (let i = 1; i <= 9; i++) {
    arrMulti.push(`7 * ${i}=${7 * i}`);
  }
  return arrMulti;
}

export function average() {
  const input = prompt("Enter number: ");
  let sum = 0;
  for (let i = 1; i <= input; i += 2) {
    sum += i;
  }
  return sum;
}
