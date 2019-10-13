function binaries(str) {
  let codeStr = "";
  const strArr = str.split("");
  strArr.forEach(num => {
    let binary = Number(num).toString(2);
    let binaryLength = binary.length;
    let preBinary = "0".repeat(binaryLength - 1) + "1";
    let code = preBinary + binary;
    codeStr += code;
  });
  return codeStr;
}

module.exports = { binaries };
