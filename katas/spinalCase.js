function spinalCase(str) {
  const regex = /[\s_]/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  return str.replace(regex, "-").toLowerCase();
}

module.exports = { spinalCase };
