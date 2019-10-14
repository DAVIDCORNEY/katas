const { expect } = require("chai");
const { subPattern1 } = require("../katas/subPattern1");

describe.only("subPattern1()", () => {
  it("should return false when passed a string with one char", () => {
    expect(subPattern1("a")).to.be.false;
  });
});
