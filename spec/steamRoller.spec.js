const { expect } = require("chai");
const { steamRoller } = require("../katas/steamRoller");

describe.only("steamRoller()", () => {
  it("should return an array if passed an array ", () => {
    expect(steamRoller([])).to.eql([]);
  });
  it("should return an array with one element if passed an array with one element", () => {
    expect(steamRoller([1])).to.eql([1]);
  });
});
