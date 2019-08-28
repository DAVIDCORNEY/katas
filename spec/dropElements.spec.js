const { expect } = require("chai");
const { dropElements } = require("../katas/dropElements");

describe.only("dropElements()", () => {
  it("Should return an empty array if passed a an empty array and a function", () => {
    expect(
      dropElements([], function(n) {
        return n >= 1;
      })
    ).to.eql([]);
  });
  it("Should return an array filtered by whether it is >= to a number stated in the function starting from the first element until the function returns true", () => {
    expect(
      dropElements([1], function(n) {
        return n >= 1;
      })
    ).to.eql([1]);
  });
});
