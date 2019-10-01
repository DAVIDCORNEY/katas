function updateInventory(arr1, arr2) {
  if (arr2.length === 0) return arr1;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].indexOf(arr1[i][1]) > 0) {
        arr1[i][0] = arr1[i][0] + arr2[j][0];
      }
    }
  }
  return arr1;
}

module.exports = { updateInventory };
