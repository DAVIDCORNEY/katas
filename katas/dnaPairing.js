function dnaPairing(str) {
  let outerArray = [];
  let pairArray = [];
  if (str === "") return outerArray;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "G":
        pairArray.push("G", "C");
        break;
      default:
        console.log("Sorry does not match");
    }
    outerArray.push(pairArray);
  }
  return outerArray;
}

module.exports = { dnaPairing };
