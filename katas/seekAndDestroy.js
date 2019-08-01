function seekAndDestroy(arr, ...args) {
  return arr.filter(item => !args.includes(item));
}

module.exports = { seekAndDestroy };
