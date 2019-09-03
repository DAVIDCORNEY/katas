function addTogether(...num) {
  const nums = num.every(item => {
    return typeof item === "number";
  });
  nums === false ? undefined : "notundefined";
}

module.exports = { addTogether };
