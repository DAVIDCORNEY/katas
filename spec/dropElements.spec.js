const { expect } = require("chai");
const { dropElements } = require("../katas/dropElements");

describe("dropElements()", () => {
  it("Should return an empty array if passed a an empty array and a function", () => {
    expect(
      dropElements([], function(n) {
        return n >= 3;
      })
    );
  });
});
