function searchAndReplace(str, before, after) {
  if (str.length === 0) return "";
  let newStr = str.replace(before, after);
  return newStr;
}

module.exports = { searchAndReplace };
