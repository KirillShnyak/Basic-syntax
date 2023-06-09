export function getDayOfWeek() {
  let date = prompt("Enter date DD.MM.YYYY: ");
  date = date.split(".").reverse().join("-");
  date = new Date(date);
  const options = { weekday: "long" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(date);
  return alert(dayOfWeek);
}

export function getMinutes() {
  const date = new Date();
  return date.getHours() * 60 + date.getMinutes();
}

export function whoIsOlder(a, b) {
  let firstDate = a.split(".").reverse().join("-");
  firstDate = Date.parse(firstDate);

  let secondDate = b.split(".").reverse().join("-");
  secondDate = Date.parse(secondDate);

  if (firstDate < secondDate) {
    return "first user is older";
  }
  if (firstDate > secondDate) {
    return "second user is older";
  }
  return "PEERS!";
}
