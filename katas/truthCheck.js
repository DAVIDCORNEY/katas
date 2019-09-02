function truthCheck(arr, pre) {
  return arr.every(function(obj) {
    return obj[pre];
  });
}

module.exports = { truthCheck };
