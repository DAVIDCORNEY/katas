function sym(...args) {
  if (args[0].length === 0) return [];
  const symmetricNums = args.map(function(arg) {
    return arg.reduce((total, curr) => {
      if (!total.includes(curr)) {
        total.push(curr);
      }
      return total;
    }, []);
  });
  const synNums = [].concat(...symmetricNums).sort((a, b) => a - b);
  const newArr = [];
  for (let i = 0; i < synNums.length; i++) {
    if (
      synNums.indexOf(synNums[i]) === i &&
      synNums.indexOf(synNums[i], i + 1) === -1
    ) {
      newArr.push(synNums[i]);
    }
  }
  return newArr;
}

module.exports = { sym };
