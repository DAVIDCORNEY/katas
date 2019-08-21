const { expect } = require("chai");
const { sortedUnion } = require("../katas/sortedUnion");

describe.only("sortedUnion()", () => {
  it("should return an empty array if passed two empty arrays", () => {
    expect(sortedUnion([], [])).to.eql([]);
  });
  it("should return an array of two numbers if passed two arrays each with a unique number", () => {
    expect(sortedUnion([1], [2])).to.eql([1, 2]);
  });
  it("should return an array of one number if passed two arrays each with the same number", () => {
    expect(sortedUnion([1], [1])).to.eql([1]);
  });
  it("should return an array of multiple numbers with duplicates removed, when passed two arrays of multiple numbers ", () => {
    expect(sortedUnion([1, 2], [1, 2, 3])).to.eql([1, 2, 3]);
    expect(sortedUnion([1, 2, 3], [2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
  });
  it("should return an array of multiple numbers with duplicates removed when passed multiple arrays of multiple numbers", () => {
    expect(sortedUnion([1], [1, 2], [1, 2, 3])).to.eql([1, 2, 3]);
    expect(sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).to.eql([
      1,
      2,
      3,
      5,
      4,
      6,
      7,
      8
    ]);
  });
});
