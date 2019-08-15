function pigLatin(str) {
  let regex = /[aeiou]/;
  if (str.length === 0) return str;
  if (regex.test(str[0])) {
    return `${str}way`;
  }
  if (regex.test(str[0] === false)) {
    const vowelPosition = str.search(regex);
    const consonants = str.slice(0, vowelPosition);
    const vowels = str.slice(vowelPosition);
    return `${vowels}${consonants}ay`;
  }
}

module.exports = { pigLatin };
