function longestWordLength(str) {
  const wordArray = str.split(" ").map(word => word.length);
  return Math.max(...wordArray);
}

module.exports = { longestWordLength };
