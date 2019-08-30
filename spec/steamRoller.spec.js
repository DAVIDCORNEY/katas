const { expect } = require("chai");
const { steamRoller } = require("../katas/steamRoller");

describe("steamRoller()", () => {
  it("should return an array if passed an array ", () => {
    expect(steamRoller([])).to.eql([]);
  });
  it("should return an array with one element if passed an array with one element", () => {
    expect(steamRoller([1])).to.eql([1]);
  });
  it("should return an array with multiple elements if passed an array with multiple elements", () => {
    expect(steamRoller([1, 2])).to.eql([1, 2]);
  });
  it("should return a flattened array when passed a nested array with one element", () => {
    expect(steamRoller([[1]])).to.eql([1]);
  });
  it("should return a flattened array when passed an array of multiple nested arrays ", () => {
    expect(steamRoller([[1], [2]])).to.eql([1, 2]);
    expect(steamRoller([[["a"]], [["b"]]])).to.eql(["a", "b"]);
    expect(steamRoller([1, [2], [3, [[4]]]])).to.eql([1, 2, 3, 4]);
    expect(steamRoller([1, [], [3, [[4]]]])).to.eql([1, 3, 4]);
    expect(steamRoller([1, {}, [3, [[4]]]])).to.eql([1, {}, 3, 4]);
  });
});
