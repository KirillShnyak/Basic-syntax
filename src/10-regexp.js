export function whatInTheString() {
  const input = prompt();
  const regDate =
    /\b\d{1,2}[/\-.\s](\d{1,2}||(янв(?:аря)?|фев(?:раля)?|мар(?:та)?|апр(?:еля)?|мая|июн(?:я)?|июл(?:я)?|авг(?:уста)?|сен(?:тября)?|окт(?:ября)?|ноя(?:бря)?|дек(?:абря)?))[/\-.\s]\d{2,4}/;
  const regMail = /\b([a-z0-9._-]+@[a-z0-9.-]+)\b/;
  const regPN =
    /\+?\d[\s(-]{0,1}\d{3}[\s)-]{0,1}\d{3}[\s-]{0,1}\d{2}[\s-]{0,1}\d{2}/;
  if (regDate.test(input) === true) {
    return "is a date";
  }
  if (regMail.test(input) === true) {
    return "is a email";
  }
  if (regPN.test(input) === true) {
    return "is a phone number";
  }
}
