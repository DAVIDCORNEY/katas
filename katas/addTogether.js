function addTogether(...num) {
  const nums = num.every(item => {
    return typeof item === "number";
  });
  if (nums !== false && num.length === 2) {
    return num[0] + num[1];
  } else if (nums !== false && num.length === 1) {
    return function(num1) {};
  }
  return undefined;
}

module.exports = { addTogether };
