function convertToRoman(num) {
  const roman = ["L", "X", "IX", "V", "IV", "I"];
  const nums = [10, 9, 5, 4, 1];
  let newStr = "";
  //if (nums.indexOf(num) > -1) return roman[nums.indexOf(num)];
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] <= num) {
      newStr += roman[i];
      num -= nums[i];
    }
  }
  return newStr;
}

module.exports = { convertToRoman };
