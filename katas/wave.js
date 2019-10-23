function wave(str) {
  const waveArr = [];
  let count = 0;
  let waveStr = "";
  if (str.length === 0) return [];
  while (count < str.length) {
    for (let i = 0; i < str.length; i++) {
      i === count ? (waveStr += str[i].toUpperCase()) : (waveStr += str[i]);
    }
    if (/[A-Z]{1}/.test(waveStr)) {
      waveArr.push(waveStr);
      waveStr = "";
      count++;
    } else {
      waveStr = "";
      count++;
    }
  }
  return waveArr;
}
module.exports = { wave };
