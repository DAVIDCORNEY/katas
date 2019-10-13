const { expect } = require("chai");
const { binaries, decode } = require("../katas/binaries");

describe("binaries()", () => {
  it("Should return '10' when passed string of '0'", () => {
    expect(binaries("0")).to.equal("10");
  });
  it("Should return '11' when passed string of '1'", () => {
    expect(binaries("1")).to.equal("11");
  });
  it("Should return '0110' when passed string of '2'", () => {
    expect(binaries("2")).to.equal("0110");
  });
  it("Should return '001101' when passed string of '5'", () => {
    expect(binaries("5")).to.equal("001101");
  });
  it("Should return '1011' when passed string of '01'", () => {
    expect(binaries("01")).to.equal("1011");
  });
  it("Should return '0011110011110111011100011000' when passed string of '77338'", () => {
    expect(binaries("77338")).to.equal("0011110011110111011100011000");
  });
  it("Should return '1010111111011011011111001100' when passed string of '0011121314'", () => {
    expect(binaries("0011121314")).to.equal("1010111111011011011111001100");
  });
});

describe.only("decode()", () => {
  it("Should return '07'when passed a string of '10001111'", () => {
    expect(decode("10001111")).to.equal("07");
  });
});
