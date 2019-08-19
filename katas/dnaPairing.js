function dnaPairing(str) {
  if (str === "") return [];
  const dna = {
    G: "C",
    C: "G",
    A: "T",
    T: "A"
  };
  return str.split("").map(letter => [letter, dna[letter]]);
}

// Revised to use a lookup object and map

// function dnaPairing(str) {
//   let outerArray = [];
//   if (str === "") return outerArray;
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "G":
//         outerArray.push(["G", "C"]);
//         break;
//       case "C":
//         outerArray.push(["C", "G"]);
//         break;
//       case "A":
//         outerArray.push(["A", "T"]);
//         break;
//       case "T":
//         outerArray.push(["T", "A"]);
//         break;
//       default:
//         console.log("Sorry does not match");
//     }
//   }
//   return outerArray;
// }

module.exports = { dnaPairing };
