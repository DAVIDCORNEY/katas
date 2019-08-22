const { expect } = require("chai");
const { convertHTML } = require("../katas/convertHTML");

describe.only("convertHTML()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(convertHTML("")).to.equal("");
  });
  it("should return a character if passed a string of a character without specified HTML entities", () => {
    expect(convertHTML("a")).to.equal("a");
  });
  it("should return words if passed a string of words without specified HTML entities", () => {
    expect(convertHTML("Hello")).to.equal("Hello");
  });
});
