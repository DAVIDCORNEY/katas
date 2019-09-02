function truthCheck(arr, pre) {
  return arr.every(obj => obj[pre]);
}

module.exports = { truthCheck };
