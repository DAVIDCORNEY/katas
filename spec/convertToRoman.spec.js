const { expect } = require("chai");
const { convertToRoman } = require("../katas/convertToRoman");

describe.only("convertToRoman()", () => {
  it("should return I when passed 1 ", () => {
    expect(convertToRoman(1)).to.equal("I");
  });
  it("should return II when passed 2", () => {
    expect(convertToRoman(2)).to.equal("II");
  });
  it("should return III when passed 3", () => {
    expect(convertToRoman(3)).to.equal("III");
  });
  it("should return IV when passed 4", () => {
    expect(convertToRoman(4)).to.equal("IV");
  });
  it("should return V when passed 5", () => {
    expect(convertToRoman(5)).to.equal("V");
  });
  it("should return IX when passed 9", () => {
    expect(convertToRoman(9)).to.equal("IX");
  });
});
