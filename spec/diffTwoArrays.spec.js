const { expect } = require("chai");
const { diffTwoArrays } = require("../katas/diffTwoArrays");

describe.only("diffTwoArrays()", () => {
  it("should return an empty array if passed two empty arrays", () => {
    const arr1 = [];
    const arr2 = [];
    expect(diffTwoArrays(arr1, arr2)).to.eql([]);
  });
  it("should return an array of one item, if passed an array with one item and an empty array", () => {
    const arr1 = [1];
    const arr2 = [];
    expect(diffTwoArrays(arr1, arr2)).to.eql([1]);
  });
  it("should return an empty array, if passed two arrays, each with a single indentical item", () => {
    const arr1 = [1];
    const arr2 = [1];
    expect(diffTwoArrays(arr1, arr2)).to.eql([]);
  });
  it("should return an array of two items, if passed two arrays, each with a different item", () => {
    const arr1 = [1];
    const arr2 = [2];
    expect(diffTwoArrays(arr1, arr2)).to.eql([1, 2]);
  });
  it("should return an array with items only found in one of the two given arrays", () => {
    const arr1 = ["a"];
    const arr2 = ["a", "b"];
    expect(diffTwoArrays(arr1, arr2)).to.eql(["b"]);
    const arr3 = ["apple", "banana"];
    const arr4 = ["apple", "grapes", "oranges", "banana"];
    expect(diffTwoArrays(arr3, arr4)).to.eql(["grapes", "oranges"]);
  });
  it("should return a new array without mutating the original input array", () => {
    const arr1 = ["apple", "banana"];
    const copyArr1 = [...arr1];
    const arr2 = ["apple", "grapes", "oranges", "banana"];
    const copyArr2 = [...arr2];
    expect(diffTwoArrays(arr1, arr2)).to.eql(["grapes", "oranges"]);
    expect(arr1).to.eql(copyArr1);
    expect(arr2).to.eql(copyArr2);
  });
});
