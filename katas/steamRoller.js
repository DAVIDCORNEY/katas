function steamRoller(arr) {
  if (arr.length === 0) return arr;
  const newArr = arr.flat();
  return newArr;
}

module.exports = { steamRoller };
