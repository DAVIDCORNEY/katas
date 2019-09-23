function sym(args) {
  if (args.length === 0) return [];
  const symmetricNums = args.reduce((total, curr) => {
    if (!total.includes(curr)) {
      total.push(curr);
    }
    return total;
  }, []);
  return symmetricNums;
}

module.exports = { sym };
