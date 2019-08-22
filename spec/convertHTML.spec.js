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
  it("should return a string with the & character replaced with &amp;", () => {
    expect(convertHTML("a & b")).to.equal("a &amp; b");
  });
  it("should return a string with the & and < characters replaced by &amp; and &lt; respectively ", () => {
    expect(convertHTML("a & b < c")).to.equal("a &amp; b &lt; c");
  });
});
