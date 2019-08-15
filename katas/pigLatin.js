function pigLatin(str) {
  if (str.length === 0) return str;
  if (/[aeiou]/gi.test(str[0])) {
    return `${str}way`;
  }
}

module.exports = { pigLatin };
