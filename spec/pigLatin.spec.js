const { expect } = require("chai");
const { pigLatin } = require("../katas/pigLatin");

describe.only("pigLatin()", () => {
  it("should return an empty string if passed an empty string", () => {
    expect(pigLatin("")).to.equal("");
  });
  it('should return a string with "way" added to the end if passed a string beginning with a vowel', () => {
    expect(pigLatin("a")).to.equal("away");
    expect(pigLatin("algorithm")).to.equal("algorithmway");
    expect(pigLatin("eight")).to.equal("eightway");
  });
  it('should return a string with a consonant moved to the end and suffixed with "ay" if passed a string beginning with a consonant', () => {
    expect(pigLatin("be")).to.equal("ebay");
    expect(pigLatin("california")).to.equal("aliforniacay");
    expect(pigLatin("glove")).to.equal("oveglay");
  });
});
