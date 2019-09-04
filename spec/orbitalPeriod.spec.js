const { expect } = require("chai");
const { orbitalPeriod } = require("../katas/orbitalPeriod");

describe("orbitalPeriod()", () => {
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
  it.only("should return a new array of one object with average altitude transformed into orbital period in seconds when passed an array of one object", () => {
    const input = [{ name: "sputnik", avgAlt: 35873.5553 }];
    const result = [{ name: "sputnik", orbitalPeriod: 86400 }];
    expect(orbitalPeriod(input)).to.eql(result);
  });
});
