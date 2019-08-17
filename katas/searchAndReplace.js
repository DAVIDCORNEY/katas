function searchAndReplace(str, before, after) {
  if (str.length === 0) return "";
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  let newStr = str.replace(before, after);
  return newStr;
}

module.exports = { searchAndReplace };
