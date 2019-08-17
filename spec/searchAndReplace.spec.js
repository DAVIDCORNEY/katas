const { expect } = require("chai");
const { searchAndReplace } = require("../katas/searchAndReplace");

describe.only("searchAndReplace()", () => {
  it("should return an empty string if passed an empty string", () => {
    expect(searchAndReplace("")).to.equal("");
  });
});
