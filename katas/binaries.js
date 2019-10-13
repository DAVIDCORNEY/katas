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

function decode() {}

module.exports = { binaries, decode };
