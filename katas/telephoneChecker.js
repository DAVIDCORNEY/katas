function telephoneChecker(str) {
  const regex = /[0-9]/g;
  let result = regex.test(str);
  return result;
}

module.exports = { telephoneChecker };
