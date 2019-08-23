function sumFibs(num) {
  const fibNums = [1, 1];
  let index = 0;
  let count = 0;
  if (num <= 1) return num;
  while (count < num) {
    fibNums.push(fibNums[index] + fibNums[index + 1]);
    index++;
    count = fibNums[fibNums.length - 1];
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
