export function rightTriangle(aSide, bSide, cSide) {
  let arg = [aSide, bSide, cSide];
  function compareNumbers(a, b) {
    return a - b;
  }

  arg = arg.sort(compareNumbers);
  if (arg[2] ** 2 === arg[0] ** 2 + arg[1] ** 2) {
    return "this triangle is right angled";
  }
  return "this triangle is not a right triangle";
}

export function getCircumferenceAndArea() {
  const radius = prompt("Enter radius: ");
  const circumference = radius * 2 * Math.PI;
  const areaOfCircle = Math.PI * radius ** 2;
  return `circumference is ${circumference.toFixed(
    1
  )} and area of a circle is ${areaOfCircle.toFixed(1)}`;
}

export function getRootsOfQuadraticEquation() {
  const a = prompt();
  const b = prompt();
  const c = prompt();

  const discr = b ** 2 - 4 * a * c;
  if (discr > 0) {
    const x1 = (-b + Math.sqrt(discr)) / (2 * a);
    const x2 = (-b - Math.sqrt(discr)) / (2 * a);
    return `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
  }
  if (discr === 0) {
    const x = -b / (2 * a);
    return `x = ${x.toFixed(2)}`;
  }
  return "no roots";
}
