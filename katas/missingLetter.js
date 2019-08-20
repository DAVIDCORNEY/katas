function missingLetter(str) {
  if (str.length === 0) return str;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1].charCodeAt() - str[i].charCodeAt() === 2) {
      return String.fromCharCode(str[i].charCodeAt() + 1);
    } else {
      console.log(false);
    }
  }
}

module.exports = { missingLetter };
