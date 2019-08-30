const { expect } = require("chai");
const { binaryAgent } = require("../katas/binaryAgent");

describe("binaryAgent()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(binaryAgent("")).to.equal("");
  });
  it("should return an English letter or character when passed a single binary string", () => {
    expect(binaryAgent("01000001")).to.equal("A");
    expect(binaryAgent("01100010")).to.equal("b");
    expect(binaryAgent("01001001")).to.equal("I");
  });
  it.only("should return an English word when passed a binary string", () => {
    expect(binaryAgent("01001001 01110100")).to.equal("It");
  });
});
