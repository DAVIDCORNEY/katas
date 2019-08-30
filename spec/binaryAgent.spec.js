const { expect } = require("chai");
const { binaryAgent } = require("binaryAgent");

describe("binaryAgent()", () => {
  it("should return a string when passed a string", () => {
    expect(binaryAgent("")).to.equal("");
  });
});
