const { expect } = require("chai");
const { missingLetters } = require("../katas/missingLetters");

describe.only("missingLetters()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(missingLetters("")).to.equal("");
  });
  it("should return the missing letter when passed a string of three consecutive letters", () => {
    expect(missingLetters("ac")).to.equal("b");
  });
});
