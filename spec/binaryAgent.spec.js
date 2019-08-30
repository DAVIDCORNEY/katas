const { expect } = require("chai");
const { binaryAgent } = require("../katas/binaryAgent");

describe.only("binaryAgent()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(binaryAgent("")).to.equal("");
  });
});
