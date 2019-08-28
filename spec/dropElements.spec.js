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
    expect(
      dropElements([1, 2], function(n) {
        return n >= 1;
      })
    ).to.eql([1, 2]);
    expect(
      dropElements([1, 1], function(n) {
        return n >= 1;
      })
    ).to.eql([1, 1]);
    expect(
      dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
      })
    ).to.eql([3, 4]);
  });
  it("Should return an array filtered by whether it is === to a number stated in the function starting from the first element until the function returns true", () => {
    expect(
      dropElements([0, 1, 0, 1], function(n) {
        return n === 1;
      })
    ).to.eql([1, 0, 1]);
  });
  it("Should return an array filtered by whether it is > than a number stated in the function starting from the first element until the function returns true", () => {
    expect(
      dropElements([1, 2, 3], function(n) {
        return n > 0;
      })
    ).to.eql([1, 2, 3]);
    expect(
      dropElements([1, 2, 3, 7, 4], function(n) {
        return n > 3;
      })
    ).to.eql([7, 4]);
    expect(
      dropElements([1, 2, 3, 9, 2], function(n) {
        return n > 2;
      })
    ).to.eql([3, 9, 2]);
    expect(
      dropElements([1, 2, 3, 4], function(n) {
        return n > 5;
      })
    ).to.eql([]);
  });
});
