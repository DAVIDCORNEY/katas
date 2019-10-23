const { expect } = require("chai");
const { wave } = require("../katas/wave");

describe.only("wave()", () => {
  it("should return an empty array if passed an empty string", () => {
    expect(wave("")).to.eql([]);
  });
  it("should return a array with a single letter capitalised if passed a string of a single letter", () => {
    expect(wave("a")).to.eql(["A"]);
  });
  it("should return an array of two strings of 2 letters with each capitalised in turn when passed a string of two letters", () => {
    expect(wave("ab")).to.eql(["Ab", "aB"]);
  });
  it("should return an array of three strings of 3 letters with each capitalised in turn when passed a string of three letters", () => {
    expect(wave("gap")).to.eql(["Gap", "gAp", "gaP"]);
  });
  it("should return an array of eight strings of two words containing 8 letters with each capitalised in turn when passed a string of three letters. White space ignored", () => {
    expect(wave("two words")).to.eql([
      "Two words",
      "tWo words",
      "twO words",
      "two Words",
      "two wOrds",
      "two woRds",
      "two worDs",
      "two wordS"
    ]);
  });
});
