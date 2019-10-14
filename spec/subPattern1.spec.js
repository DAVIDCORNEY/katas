const { expect } = require("chai");
const { subPattern1 } = require("../katas/subPattern1");

describe.only("subPattern1()", () => {
  it("should return false when passed a string with one char", () => {
    expect(subPattern1("a")).to.be.false;
  });
  it("should return true when passed a string with two chars that are the same", () => {
    expect(subPattern1("aa")).to.be.true;
  });
  it("should return false when passed a string with two chars that are the not the same", () => {
    expect(subPattern1("ab")).to.be.false;
  });
  it("should return true when passed a string with three chars that are the same", () => {
    expect(subPattern1("aaa")).to.be.true;
  });
  it("should return false when passed a string with three chars that are not the same", () => {
    expect(subPattern1("abc")).to.be.false;
  });
});
