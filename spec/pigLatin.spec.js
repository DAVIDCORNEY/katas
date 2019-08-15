const { expect } = require("chai");
const { pigLatin } = require("../katas/pigLatin");

describe.only("pigLatin()", () => {
  it("should return an empty string if passed an empty string", () => {
    expect(pigLatin("")).to.equal("");
  });
  it('should return a string with "way" added to the end if passed a string beginning with a vowel', () => {
    expect(pigLatin("a")).to.equal("away");
  });
});
