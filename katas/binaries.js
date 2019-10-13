function binaries(str) {
  let codeStr = "";

  const strArr = str.split("");

  function generateCode(num) {
    let binary = Number(num).toString(2);
    let preBinary = "0".repeat(binary.length - 1) + "1";
    let code = preBinary.concat(binary);
    codeStr += code;
  }

  strArr.forEach(num => {
    generateCode(num);
  });
  return codeStr;
}

function decode(str) {
  const codeArr = [];
  let decodeStr = "";
  for (let i = 0; i < 10; i++) {
    codeArr.push(binaries(String(i)));
  }
  while (str.length > 0) {
    for (let i = codeArr.length - 1; i >= 0; i--) {
      if (str.startsWith(codeArr[i])) {
        decodeStr += String(i);
        str = str.slice(codeArr[i].length);
      }
    }
  }
  return decodeStr;
}

module.exports = { binaries, decode };
