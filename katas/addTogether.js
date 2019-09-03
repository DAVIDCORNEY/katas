function addTogether(...num) {
  const nums = num.every(item => {
    return typeof item === "number";
  });
  if (!nums) return undefined;
}

module.exports = { addTogether };
