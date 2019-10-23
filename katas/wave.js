function wave(str) {
  const waveArr = [];
  let count = 0;
  let waveStr = "";
  if (str.length === 0) return [];
  while (count < str.length) {
    for (let i = 0; i < str.length; i++) {
      if (i === count) {
        waveStr += str[i].toUpperCase();
      } else {
        waveStr += str[i];
      }
    }
    count++;
    waveArr.push(waveStr);
    waveStr = "";
  }
  return waveArr;
}

module.exports = { wave };
