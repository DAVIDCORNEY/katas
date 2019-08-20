const { expect } = require("chai");
const { missingLetter } = require("../katas/missingLetter");

describe.only("missingLetters()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(missingLetter("")).to.equal("");
  });
  it("should return the missing letter when passed a string of three consecutive letters", () => {
    expect(missingLetter("ac")).to.equal("b");
  });
});
