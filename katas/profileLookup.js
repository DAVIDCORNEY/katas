const profileLookup = (arr, name, prop) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].firstName === name) {
      return arr[i][prop] ? arr[i][prop] : "No such property";
    }
  }
  return "No such contact";
};

module.exports = { profileLookup };
