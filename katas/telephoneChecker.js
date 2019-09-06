function telephoneChecker(str) {
  const regex = /(\(\d{3}\)\d{3}-\d{4})|\d{3}-\d{3}-\d{4}|/g;
  let result = regex.test(str);
  return result;
}

module.exports = { telephoneChecker };
