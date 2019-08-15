const { expect } = require("chai");
const { pigLatin } = require("../katas/pigLatin");

describe("pigLatin()", () => {
  it("should return an empty string if passed an empty string", () => {
    expect(pigLatin("")).to.equal("");
  });
});
