const { expect } = require("chai");
const { wave } = require("../katas/wave");

describe.only("wave()", () => {
  it("should return an empty array if passed an empty string", () => {
    expect(wave("")).to.eql([]);
  });
});
