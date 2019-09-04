const { expect } = require("chai");
const { orbitalPeriod } = require("../katas/orbitalPeriod");

describe.only("orbitalPeriod()", () => {
  it("should return a new empty array when passed an array", () => {
    const input = [];
    const expected = [];
    expect(orbitalPeriod(input)).to.not.equal(expected);
    expect(orbitalPeriod(input)).to.eql(expected);
  });
  it("should return a new array containing the properties 'name' and 'avgAlt' when passed an array with an object with name and avgAlt", () => {
    const input = [{ name: "a", avgAlt: 1 }];
    expect(orbitalPeriod(input)).to.have.own.property("name");
    expect(orbitalPeriod(input)).to.have.own.property("avgAlt");
  });
});
