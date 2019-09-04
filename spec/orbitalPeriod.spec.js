const { expect } = require("chai");
const { orbitalPeriod } = require("../katas/orbitalPeriod");

describe.only("orbitalPeriod()", () => {
  it("should return a new empty array when passed an array", () => {
    const input = [];
    const expected = [];
    expect(orbitalPeriod(input)).to.not.equal(expected);
    expect(orbitalPeriod(input)).to.eql(expected);
  });
});
