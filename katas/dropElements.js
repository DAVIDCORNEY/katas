function dropElements(arr, func) {
  if (arr.length === 0) return arr;
  const newArr = arr.filter(func);
  return newArr;
}

module.exports = { dropElements };
