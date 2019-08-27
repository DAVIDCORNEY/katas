const { expect } = require("chai");
const { smallestCommons } = require("../katas/smallestCommons");

describe.only("smallestCommons()", () => {
  it("should return a number when passed an array of two numbers", () => {
    expect(smallestCommons([1, 2])).to.be.a("number");
  });
  it("should return the smallest common multiple of both numbers in the passed array and be evenly divisible by all numbers between them", () => {
    expect(smallestCommons([3, 1])).to.equal(6);
    expect(smallestCommons([1, 5])).to.equal(60);
    expect(smallestCommons([5, 1])).to.equal(60);
    expect(smallestCommons([2, 10])).to.equal(2520);
    expect(smallestCommons([1, 13])).to.equal(360360);
  });
});
