const { expect } = require("chai");
const { sortedUnion } = require("../katas/sortedUnion");

describe.only("sortedUnion()", () => {
  it("should return an empty array if passed two empty arrays", () => {
    expect(sortedUnion([], [])).to.eql([]);
  });
  it("should return an array of two numbers if passed two arrays each with a unique number", () => {
    expect(sortedUnion([1], [2])).to.eql([1, 2]);
  });
});
