function dnaPairing(str) {
  let outerArray = [];
  let pairArray = [];
  if (str === "") return outerArray;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "G":
        pairArray.push("G", "C");
        break;
      case "C":
        pairArray.push("C", "G");
        break;
      case "A":
        pairArray.push("A", "T");
        break;
      case "T":
        pairArray.push("T", "A");
        break;
      default:
        console.log("Sorry does not match");
    }
    outerArray.push(pairArray);
  }
  return outerArray;
}

module.exports = { dnaPairing };
