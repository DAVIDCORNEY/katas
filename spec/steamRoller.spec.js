const { expect } = require("chai");
const { steamRoller } = require("../katas/steamRoller");

describe.only("steamRoller()", () => {
  it("should return an array if passed an array ", () => {
    expect(steamRoller([])).to.eql([]);
  });
});
