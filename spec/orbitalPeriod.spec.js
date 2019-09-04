const { expect } = require("chai");
const { orbitalPeriod } = require("../katas/orbitalPeriod");

describe.only("orbitalPeriod()", () => {
  it("should return a new empty array when passed an array", () => {
    const input = [];
    const expected = [];
    expect(orbitalPeriod(input)).to.not.equal(expected);
    expect(orbitalPeriod(input)).to.eql(expected);
  });
  it("should return a new array containing the properties 'name' and 'orbitalPeriod' when passed an array with an object with name and avgAlt", () => {
    const input = [{ name: "a", avgAlt: 1 }];
    const result = orbitalPeriod(input);
    expect(result[0]).to.have.property("name");
    expect(result[0]).to.have.property("orbitalPeriod");
  });
});
