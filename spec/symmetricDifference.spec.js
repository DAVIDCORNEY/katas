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
  });
});
