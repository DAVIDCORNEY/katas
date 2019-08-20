const { expect } = require("chai");
const { missingLetters } = require("../katas/missingLetters");

describe.only("missingLetters()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(missingLetters("")).to.equal("");
  });
});
