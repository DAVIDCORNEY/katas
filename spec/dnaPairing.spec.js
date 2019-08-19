const { expect } = require("chai");
const { dnaPairing } = require("../katas/dnaPairing");

describe.only("dnaPairing()", () => {
  it("should return an empty array when passed an empty string", () => {
    expect(dnaPairing("")).to.eql([]);
  });
  it("should return a 2D array with an element and its pair, when passed a string of a single element ", () => {
    expect(dnaPairing("G")).to.eql([["G", "C"]]);
  });
});
