function diffTwoArrays(array1, array2) {
  return array1.concat(array2).filter(item => {
    return !array1.includes(item) || !array2.includes(item);
  });
}

module.exports = { diffTwoArrays };
