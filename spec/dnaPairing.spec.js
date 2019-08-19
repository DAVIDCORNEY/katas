const { expect } = require("chai");
const { dnaPairing } = require("../katas/dnaPairing");

describe("dnaPairing()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(dnaPairing("")).to.equal("");
  });
});
