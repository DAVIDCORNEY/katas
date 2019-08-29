function steamRoller(arr) {
  if (arr.length === 0) return arr;
  const newArr = arr.flat(Infinity);
  return newArr;
}

module.exports = { steamRoller };
