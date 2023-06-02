export function sumFrom50to100() {
  let sum = 0;
  let number = 50;
  while (number <= 100) {
    sum += number;
    number++;
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
  for (let i = 1; i <= input; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
