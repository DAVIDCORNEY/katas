function sortedUnion(...args) {
  const arr = [];
  const newArr = arr.concat(...args);
  return newArr.filter((num, i) => {
    return newArr.indexOf(num) === i;
  });
}

module.exports = { sortedUnion };
