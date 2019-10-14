function subPattern1(str) {
  if (str.length < 2) return false;
  if (str.length % 2 === 0) {
    let firstHalf = str.substring(0, str.length / 2);
    let secondHalf = str.substring(str.length / 2, str.length);
    return firstHalf === secondHalf ? true : false;
  } else if (str.length % 2 !== 0) {
    let regex = /[A-Ba-b0-9]{1}/g;
    let matches = str.match(regex);
    if (matches.length === str.length) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { subPattern1 };
