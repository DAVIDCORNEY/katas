function sortedUnion(...args) {
  const newArr = [].concat(...args);
  return newArr.filter((num, i) => newArr.indexOf(num) === i);
}

module.exports = { sortedUnion };
