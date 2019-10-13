const { expect } = require("chai");
const { binaries } = require("../katas/binaries");

describe("binaries()", () => {
  it("Should return 10 when passed string of 0", () => {
    expect(binaries("0")).to.equal("10");
  });
});
