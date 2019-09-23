const { expect } = require("chai");
const { sym } = require("../katas/symmetricDifference");

describe.only("sym", () => {
  it("will return an empty array when passed an empty array", () => {
    expect(sym([])).to.eql([]);
  });
});
