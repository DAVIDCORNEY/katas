const { expect } = require("chai");
const { smallestCommons } = require("../katas/smallestCommons");

describe.only("smallestCommons()", () => {
  it("should return a number when passed an array of two numbers", () => {
    expect(smallestCommons([1, 2])).to.be.a("number");
  });
});
