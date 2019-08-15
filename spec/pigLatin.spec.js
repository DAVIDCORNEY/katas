const { expect } = require("chai");
const { pigLatin } = require("../katas/pigLatin");

describe.only("pigLatin()", () => {
  it("should return an empty string if passed an empty string", () => {
    expect(pigLatin("")).to.equal("");
  });
});
