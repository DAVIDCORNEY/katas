const { expect } = require("chai");
const { smallestCommons } = require("../katas/smallestCommons");

describe("smallestCommons()", () => {
  it("should return a number when passed a number", () => {
    expect(smallestCommons(1)).to.be.a("number");
  });
});
