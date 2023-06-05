export function sumNumInArr(arr) {
  const totalSum = arr.reduce((sum, i) => sum + i, 0);
  return totalSum;
}

export function minMax(a) {
  const max = Math.max(...a);
  const min = Math.min(...a);
  return `${min}, ${max}`;
}
