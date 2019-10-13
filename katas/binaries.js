function binaries(str) {
  let binary = str.toString(2);
  let binaryLength = binary.length;
  let preBinary = "0".repeat(binaryLength - 1) + "1";
  let code = preBinary + binary;
  return code;
}

module.exports = { binaries };
