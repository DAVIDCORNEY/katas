function subPattern1(str) {
  const string = str + str;
  return string.indexOf(str, 1) !== str.length ? true : false;
}

module.exports = { subPattern1 };

//return /^(.+)\1+$/.test(str);

// ^ and $ stands for start and end anchors to predict the position.
// (.+) captures any pattern and captures the value(except \n).
// \1 is backreference of first captured value and \1 + would check for repetition of captured value.
