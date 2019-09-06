function telephoneChecker(str) {
  const regex = /^(1\s*)?(\([0-9]{3}\)\s*[0-9]{3}-[0-9]{4})|(1\s)?[0-9]{3}(-|\s)[0-9]{3}(-|\s)[0-9]{4}|[0-9]{10}$/g;
  return regex.test(str);
}

module.exports = { telephoneChecker };
