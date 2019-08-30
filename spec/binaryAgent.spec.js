const { expect } = require("chai");
const { binaryAgent } = require("../katas/binaryAgent");

describe.only("binaryAgent()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(binaryAgent("")).to.equal("");
  });
  it("should return an English letter or character when passed a single binary string", () => {
    expect(binaryAgent("01000001")).to.equal("A");
  });
});
