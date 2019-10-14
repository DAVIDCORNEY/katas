function subPattern1(str) {
  if (str.length < 2) return false;
  let firstHalf = str.substring(0, str.length / 2);
  let secondHalf = str.substring(str.length / 2, str.length);
  return firstHalf === secondHalf ? true : false;
}

module.exports = { subPattern1 };
