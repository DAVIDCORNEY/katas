const { expect } = require("chai");
const { seekAndDestroy } = require("../katas/seekAndDestroy");

describe("seekAndDestroy()", () => {
  it("should return an empty array if passed an empty array", () => {
    expect(seekAndDestroy([])).to.eql([]);
  });
  it("should return an empty array if passed an array with a single element and an argument of the same value", () => {
    expect(seekAndDestroy([1], 1)).to.eql([]);
  });
  it("should return an array of one element if passed an array with a single element and an argument of a different value ", () => {
    expect(seekAndDestroy([1], 2)).to.eql([1]);
  });
  it("should return an array of multiple elements without elements that appear in both the passed array and argument", () => {
    expect(seekAndDestroy([1, 2, 3, 4, 5, 6], 1)).to.eql([2, 3, 4, 5, 6]);
    expect(seekAndDestroy(["Kevin", "David", "Paul"], "Paul")).to.eql([
      "Kevin",
      "David"
    ]);
  });
  it("should return an array of multiple elements without elements that appear in both the passed array and multiple arguments", () => {
    expect(seekAndDestroy([1, 2, 3, 4, 5, 6, 7], 1, 2)).to.eql([3, 4, 5, 6, 7]);
    expect(
      seekAndDestroy(
        ["Kevin", "David", "Paul", "James", "Steven"],
        "Kevin",
        "James"
      )
    ).to.eql(["David", "Paul", "Steven"]);
    expect(
      seekAndDestroy(
        ["Kevin", 1, "David", "Paul", 2, "James", "Steven"],
        "Kevin",
        "James",
        1
      )
    ).to.eql(["David", "Paul", 2, "Steven"]);
  });
});
