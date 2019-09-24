const { expect } = require("chai");
const { sym } = require("../katas/symmetricDifference");

describe.only("sym", () => {
  it("will return an empty array when passed an empty array", () => {
    expect(sym([])).to.eql([]);
  });
  it("will return an array of one number when passed an array of one number", () => {
    expect(sym([1])).to.eql([1]);
  });
  it("will return an array of multiple numbers without duplicates when passed an array of multiple numbers without duplicates ", () => {
    expect(sym([1, 2])).to.eql([1, 2]);
  });
  it("will return an array of multiple numbers without duplicates when passed an array of numbers with duplicates", () => {
    expect(sym([1, 2, 2])).to.eql([1, 2]);
  });
  it("will return a single array of numbers without duplicates and without numbers present in both passed arrays", () => {
    expect(sym([1, 2], [2])).to.eql([1]);
    expect(sym([1, 2, 3], [5, 2, 1, 4])).to.eql([3, 4, 5]);
  });
  it("will return a single array of numbers without duplicates and without numbers present in multiple passed arrays", () => {
    expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).to.eql([1, 4, 5]);
    expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.eql([1, 4, 5]);
    expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).to.eql([
      2,
      3,
      4,
      6,
      7
    ]);
    expect(
      sym(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      )
    ).to.eql([1, 2, 4, 5, 6, 7, 8, 9]);
  });
});
