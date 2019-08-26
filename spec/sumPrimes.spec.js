const { expect } = require("chai");
const { sumPrimes } = require("../katas/sumPrimes");

describe.only("sumPrimes()", () => {
  it("should return a number if passed a number", () => {
    expect(sumPrimes(1)).to.be.a("number");
  });
});
