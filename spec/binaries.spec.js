const { expect } = require("chai");
const { binaries } = require("../katas/binaries");

describe.only("binaries()", () => {
  it("Should return 10 when passed string of 0", () => {
    expect(binaries("0")).to.equal("10");
  });
  it("Should return 11 when passed string of 1", () => {
    expect(binaries("1")).to.equal("11");
  });
});
