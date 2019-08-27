const { expect } = require("chai");
const { smallestCommons } = require("../katas/smallestCommons");

describe("smallestCommons()", () => {
  it("should return a number when passed an array of two numbers", () => {
    expect(smallestCommons([1, 2])).to.be.a("number");
  });
  it.only("should return the smallest common multiple of both numbers in the passed array and be evenly divisible by all numbers between them", () => {
    expect(smallestCommons([3, 1])).to.equal(6);
  });
});
