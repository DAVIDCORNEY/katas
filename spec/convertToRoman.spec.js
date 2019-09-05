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
  it("should return XII when passed 12", () => {
    expect(convertToRoman(12)).to.equal("XII");
  });
  it("should return XXIX when passed 29", () => {
    expect(convertToRoman(29)).to.equal("XXIX");
  });
  it("should return XLV when passed 45", () => {
    expect(convertToRoman(45)).to.equal("XLV");
  });
  it("should return LXVIII when passed 68", () => {
    expect(convertToRoman(68)).to.equal("LXVIII");
  });
  it("should return XCIX when passed 99", () => {
    expect(convertToRoman(99)).to.equal("XCIX");
  });
  it("should return CDI when passed 401", () => {
    expect(convertToRoman(401)).to.equal("CDI");
  });
  it("should return DI when passed 501", () => {
    expect(convertToRoman(501)).to.equal("DI");
  });
  it("should return DCCXCVIII when passed 798", () => {
    expect(convertToRoman(798)).to.equal("DCCXCVIII");
  });
  it("should return MMMCMXCIX when passed 3999", () => {
    expect(convertToRoman(3999)).to.equal("MMMCMXCIX");
  });
});
