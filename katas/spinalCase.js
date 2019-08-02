function spinalCase(str) {
  let regex = /[\s_]/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  str = str.replace(regex, "-");
  return str.toLowerCase();
}

module.exports = { spinalCase };
