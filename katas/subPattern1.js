function subPattern1(str) {
  if (str.length < 2) return false;
  let firstHalf = str.substring(0, str.length / 2);
  let secondHalf = str.substring(str.length / 2, str.length);
  if (firstHalf === secondHalf) return true;
}

module.exports = { subPattern1 };
