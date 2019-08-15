function pigLatin(str) {
  const regex = /[aeiou]/;
  const vowelPosition = str.search(regex);
  const consonants = str.slice(0, vowelPosition);
  const vowels = str.slice(vowelPosition);
  if (str.length === 0) return str;
  return regex.test(str[0])
    ? `${str}way`
    : !regex.test(str)
    ? `${str}ay`
    : `${vowels}${consonants}ay`;
}

module.exports = { pigLatin };
