const { expect } = require("chai");
const { longestWordLength } = require("../katas/longestWordLength");

describe("longestWordLength()", () => {
  it("returns the length of a word, when passed a str with one word", () => {
    expect(longestWordLength("a")).to.equal(1);
  });
  it("returns the length of the longest word, when passed a str of two words", () => {
    expect(longestWordLength("a at")).to.equal(2);
  });
  it("returns the length of the longest word, when passed a str of multiple words", () => {
    expect(longestWordLength("a at ate")).to.equal(3);
    expect(
      longestWordLength("The quick brown fox jumped over the lazy dog")
    ).to.equal(6);
    expect(longestWordLength("The internet of things")).to.equal(8);
  });
});
