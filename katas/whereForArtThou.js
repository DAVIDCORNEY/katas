function whereForArtThou(arr, arg) {
  if (arr.length === 0) return [];
  let source = Object.keys(arg);
  return arr.filter(obj => {
    return source.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === arg[key];
    });
  });
}

module.exports = { whereForArtThou };
