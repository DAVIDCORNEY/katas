const { expect } = require("chai");
const { convertHTML } = require("../katas/convertHTML");

describe.only("convertHTML()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(convertHTML("")).to.equal("");
  });
  it("should return a character if passed a string of a character", () => {
    expect(convertHTML("a")).to.equal("a");
  });
});
