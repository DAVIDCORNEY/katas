const { expect } = require("chai");
const { sumFibs } = require("../katas/sumFibs");

describe.only("sumFibs()", () => {
  it("should return 1 if passed an integer of 1", () => {
    expect(sumFibs(1)).to.equal(1);
  });
  it("should return the sum of all odd Fibonacci Numbers when passed an integer of num", () => {
    expect(sumFibs(3)).to.equal(5);
  });
});
