const { expect } = require("chai");
const { sumAllNumbers } = require("../katas/sumAllNumbers");

describe("sumAllNumbers()", () => {
  it("returns the sum of two numbers when passed an array of two positive numbers of the same value", () => {
    const arr = [1, 1];
    expect(sumAllNumbers(arr)).to.equal(2);
  });
  it("returns the sum of two numbers when passed an array of two consecutive positive numbers", () => {
    const arr = [1, 2];
    expect(sumAllNumbers(arr)).to.equal(3);
  });
  it("returns the sum of two numbers and the numbers in between, when passed an array of two positive numbers in ascending order", () => {
    const arr = [1, 3];
    expect(sumAllNumbers(arr)).to.equal(6);
    const arr2 = [1, 4];
    expect(sumAllNumbers(arr2)).to.equal(10);
    const arr3 = [5, 10];
    expect(sumAllNumbers(arr3)).to.equal(45);
  });
  it("returns the sum of two numbers and the numbers in between, when passed an array of two positive numbers in descending order", () => {
    const arr = [3, 1];
    expect(sumAllNumbers(arr)).to.equal(6);
    const arr2 = [4, 1];
    expect(sumAllNumbers(arr2)).to.equal(10);
    const arr3 = [10, 5];
    expect(sumAllNumbers(arr3)).to.equal(45);
  });
});
