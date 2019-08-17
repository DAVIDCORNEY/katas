const { expect } = require("chai");
const { searchAndReplace } = require("../katas/searchAndReplace");

describe.only("searchAndReplace()", () => {
  it("should return an empty string if passed an empty string", () => {
    expect(searchAndReplace("")).to.equal("");
  });
  it("should return a string with a character replaced with the passed character ", () => {
    expect(searchAndReplace("a", "a", "b")).to.equal("b");
  });
  it("should return a string with a character replaced with the passed character maintaining the case of the first char of the original character", () => {
    expect(searchAndReplace("A", "A", "b")).to.equal("B");
    expect(searchAndReplace("a", "a", "B")).to.equal("b");
  });
  it("should return a string of multiple characters with a character replaced with the passed character maintaining the case of the original character", () => {
    expect(searchAndReplace("Aa", "A", "b")).to.equal("Ba");
    expect(searchAndReplace("aA", "a", "b")).to.equal("ba");
  });
});
