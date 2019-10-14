const { expect } = require("chai");
const { subPattern1 } = require("../katas/subPattern1");

describe.only("subPattern1()", () => {
  it("should return false when passed a string with one char", () => {
    expect(subPattern1("a")).to.be.false;
  });
  it("should return true when passed a string with two chars that are the same", () => {
    expect(subPattern1("aa")).to.be.true;
  });
});
