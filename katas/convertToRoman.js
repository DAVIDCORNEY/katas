function convertToRoman(num) {
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let newStr = "";
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] <= num) {
      newStr += roman[i];
      num -= nums[i];
    }
  }
  return newStr;
}

module.exports = { convertToRoman };
