function binaryAgent(str) {
  if (str.length === 0) return str;
  return str
    .split(" ")
    .map(function(char) {
      let num = 0;
      for (let i = 0; i < char.length; i++) {
        num = num * 2 + +char[i];
      }
      return String.fromCharCode(num);
    })
    .join("");
}

module.exports = { binaryAgent };
