const { expect } = require("chai");
const { sumFibs } = require("../katas/sumFibs");

describe.only("sumFibs()", () => {
  it("should return 1 if passed an integer of 1", () => {
    expect(sumFibs(1)).to.equal(1);
  });
  it("should return the sum of all odd Fibonacci Numbers when passed an integer of num", () => {
    expect(sumFibs(3)).to.equal(5);
    expect(sumFibs(4)).to.equal(5);
    expect(sumFibs(1000)).to.equal(1785);
    expect(sumFibs(75024)).to.equal(60696);
    expect(sumFibs(75025)).to.equal(135721);
  });
});
