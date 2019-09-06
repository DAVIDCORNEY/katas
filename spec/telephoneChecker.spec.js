const { expect } = require("chai");
const { telephoneChecker } = require("../katas/telephoneChecker");

describe.only("telephoneChecker()", () => {
  it("should return a boolean when passed a string", () => {
    expect(telephoneChecker("555-555-5555")).to.be.a("boolean");
  });
  it("should return true when passed a US phone number string of the format '555-555-5555'", () => {
    expect(telephoneChecker("555-555-5555")).to.be.true;
  });
  it("should return true when passed a US phone number string of the format '(555)555-5555'", () => {
    expect(telephoneChecker("(555)555-5555")).to.be.true;
  });
  it("should return true when passed a US phone number string of the format '(555) 555-5555' ", () => {
    expect(telephoneChecker("(555) 555-5555")).to.be.true;
  });
  it("should return true when passed a US phone number string of the format '1 (555) 555-5555' ", () => {
    expect(telephoneChecker("1 (555) 555-5555")).to.be.true;
  });
});
