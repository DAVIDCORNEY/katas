function dropElements(arr, func) {
  let index = 0;
  if (arr.length === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      index = i;
      break;
    }
  }
  return arr.slice(index);
}

module.exports = { dropElements };
