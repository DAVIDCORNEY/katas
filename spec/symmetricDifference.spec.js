const { expect } = require("chai");
const { sym } = require("../katas/symmetricDifference");

describe.only("sym", () => {
  it("will return an empty array when passed an empty array", () => {
    expect(sym([])).to.eql([]);
  });
  it("will return an array of one number when passed an array of one number", () => {
    expect(sym([1])).to.eql([1]);
  });
});
