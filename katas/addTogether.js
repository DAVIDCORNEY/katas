function addTogether(...num) {
  const nums = num.every(item => {
    return typeof item === "number";
  });
  if (nums !== false && num.length > 1) {
    return num[0] + num[1];
  }
  return undefined;
}

module.exports = { addTogether };
