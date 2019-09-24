function sym(...args) {
  const arguments = [...args];

  function getSymDiff(array1, array2) {
    const symmetricalNums = [];
    array1.forEach(num => {
      if (array2.indexOf(num) < 0 && symmetricalNums.indexOf(num) < 0) {
        symmetricalNums.push(num);
      }
    });
    array2.forEach(num => {
      if (array1.indexOf(num) < 0 && symmetricalNums.indexOf(num) < 0) {
        symmetricalNums.push(num);
      }
    });
    return symmetricalNums;
  }
  return arguments
    .reduce(getSymDiff)
    .filter((num, index, array) => array.indexOf(num) === index)
    .sort((a, b) => a - b);
}

module.exports = { sym };
