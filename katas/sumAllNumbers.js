function sumAllNumbers(arr) {
  let total = 0;
  if (arr[0] === arr[1]) return arr[0] + arr[1];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    total += i;
  }
  return total;
}

module.exports = { sumAllNumbers };
