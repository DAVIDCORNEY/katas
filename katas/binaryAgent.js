function binaryAgent(str) {
  let num = 0;
  if (str.length === 0) return str;
  for (let i = 0; i < str.length; i++) {
    num = num * 2 + +str[i];
  }
  return String.fromCharCode(num);
}

module.exports = { binaryAgent };
