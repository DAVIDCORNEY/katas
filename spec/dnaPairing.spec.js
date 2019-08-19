const { expect } = require("chai");
const { dnaPairing } = require("../katas/dnaPairing");

describe.only("dnaPairing()", () => {
  it("should return an empty array when passed an empty string", () => {
    expect(dnaPairing("")).to.eql([]);
  });
  it("should return an array with a nested array ['G','C'] when passed a string of a single element 'G' ", () => {
    expect(dnaPairing("G")).to.eql([["G", "C"]]);
  });
});
