const { expect } = require("chai");
const { searchAndReplace } = require("../katas/searchAndReplace");

describe("searchAndReplace()", () => {
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
    expect(searchAndReplace("aA", "a", "b")).to.equal("bA");
  });
  it("should return a string of words with a word replaced with the passed word maintaining the case of the first letter of the original word", () => {
    expect(searchAndReplace("A Cat", "A", "the")).to.equal("The Cat");
    expect(
      searchAndReplace("Let us go to the store", "store", "mall")
    ).to.equal("Let us go to the mall");
    expect(searchAndReplace("His name is Tom", "Tom", "john")).to.equal(
      "His name is John"
    );
    expect(
      searchAndReplace("Let us get back to more Coding", "Coding", "algorithms")
    ).to.equal("Let us get back to more Algorithms");
  });
});
