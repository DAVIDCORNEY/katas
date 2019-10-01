const { expect } = require("chai");
const { updateInventory } = require("../katas/updateInventory");

describe.only("updateInventory", () => {
  it("should return array1 unchanged when array2 is passed as an empty array", () => {
    expect(updateInventory([[21, "Bowling Ball"]], [])).to.eql([
      [21, "Bowling Ball"]
    ]);
  });
});
