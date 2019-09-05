const { expect } = require("chai");
const { telephoneChecker } = require("../katas/telephoneChecker");

describe.only("telephoneChecker()", () => {
  it("should return a boolean when passed a string", () => {
    expect(telephoneChecker("555-555-5555")).to.be.a("boolean");
  });
});
