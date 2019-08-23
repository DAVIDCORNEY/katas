const { expect } = require("chai");
const { sumFibs } = require("../katas/sumFibs");

describe.only("sumFibs()", () => {
  it("should return 1 if passed an integer of 1", () => {
    expect(sumFibs(1)).to.equal(1);
  });
});
