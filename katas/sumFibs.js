function sumFibs(num) {
  const fibNums = [1, 1];
  let index = 0;
  if (num <= 1) return num;
  while (fibNums[index] + fibNums[index + 1] <= num) {
    fibNums.push(fibNums[index] + fibNums[index + 1]);
    index++;
  }
  const sum = fibNums.reduce((acc, curr) => {
    if (curr % 2 === 1) {
      acc += curr;
    }
    return acc;
  }, 0);
  return sum;
}

module.exports = { sumFibs };
