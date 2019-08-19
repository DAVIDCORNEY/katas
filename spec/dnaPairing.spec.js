const { expect } = require("chai");
const { dnaPairing } = require("../katas/dnaPairing");

describe.only("dnaPairing()", () => {
  it("should return an empty array when passed an empty string", () => {
    expect(dnaPairing("")).to.eql([]);
  });
  it("should return an array with a nested array ['G','C'] when passed a string of a single element 'G' ", () => {
    expect(dnaPairing("G")).to.eql([["G", "C"]]);
  });
  it("should return an array with a nested array ['C','G'] when passed a string of a single element 'C' ", () => {
    expect(dnaPairing("C")).to.eql([["C", "G"]]);
  });
  it("should return an array with a nested array ['A','T'] when passed a string of a single element 'A' ", () => {
    expect(dnaPairing("A")).to.eql([["A", "T"]]);
  });
  it("should return an array with a nested array ['T','A'] when passed a string of a single element 'T' ", () => {
    expect(dnaPairing("T")).to.eql([["T", "A"]]);
  });
  it("should return multiple nested arrays of elements with appropriate pairs, when passed a string of multiple elements", () => {
    expect(dnaPairing("GC")).to.eql([["G", "C"], ["C", "G"]]);
  });
});
