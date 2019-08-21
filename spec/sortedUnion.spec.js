const { expect } = require("chai");
const { sortedUnion } = require("../katas/sortedUnion");

describe.only("sortedUnion()", () => {
  it("should return an empty array if passed two empty arrays", () => {
    expect(sortedUnion([], [])).to.eql([]);
  });
});
