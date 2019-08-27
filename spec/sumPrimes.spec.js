const { expect } = require("chai");
const { sumPrimes } = require("../katas/sumPrimes");

describe("sumPrimes()", () => {
  it("should return a number if passed a number", () => {
    expect(sumPrimes(1)).to.be.a("number");
  });
  it("should return the sum of all prime numbers up to and including the passed number ", () => {
    expect(sumPrimes(10)).to.equal(17);
    expect(sumPrimes(977)).to.equal(73156);
  });
});
