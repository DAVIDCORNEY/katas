const { expect } = require("chai");
const { convertToRoman } = require("../katas/convertToRoman");

describe.only("convertToRoman()", () => {
  it("should return I when passed 1 ", () => {
    expect(convertToRoman(1)).to.equal("I");
  });
});
