const { expect } = require("chai");
const { subPattern } = require("../katas/subPattern1");

describe("subPattern()", () => {
  it("should return false when passed a string with one char", () => {
    expect(subPattern("a")).to.be.false;
  });
});
