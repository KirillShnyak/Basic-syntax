export function largestNum(a, b) {
  return a > b ? a : b;
}

export function whatIsMonth() {
  const input = prompt("Enter month number"); // eslint-disable-line
  const months = [
    " ",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i < months.length; i++) {
    if (i == input) {
      return months[i];
    }
  }
}

export function circleInSquare(circle, square) {
  const a = Math.sqrt(square);
  const b = 2 * Math.sqrt(circle / Math.PI);
  return a >= b ? "Fit!" : "Do not fit!";
}
