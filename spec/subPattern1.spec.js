const { expect } = require("chai");
const { subPattern1 } = require("../katas/subPattern1");

describe("subPattern1()", () => {
  it("should return false when passed a string with one char", () => {
    expect(subPattern1("a")).to.be.false;
  });
  it("should return true when passed a string with two chars that are the same", () => {
    expect(subPattern1("aa")).to.be.true;
  });
  it("should return false when passed a string with two chars that are the not the same", () => {
    expect(subPattern1("ab")).to.be.false;
  });
  it("should return true when passed a string with three chars that are the same", () => {
    expect(subPattern1("aaa")).to.be.true;
  });
  it("should return false when passed a string with three chars that are not the same", () => {
    expect(subPattern1("abc")).to.be.false;
  });
  it("should return true when passed a string with four chars where there is a repeating pattern", () => {
    expect(subPattern1("abab")).to.be.true;
  });
  it("should return false when passed a string with four chars where there is no repeating pattern", () => {
    expect(subPattern1("abcd")).to.be.false;
  });
  it("should return false when passed a string with five chars", () => {
    expect(subPattern1("abcde")).to.be.false;
  });
  it("should return true when passed a string with six chars, with a repeating pattern", () => {
    expect(subPattern1("ababab")).to.be.true;
  });
});
