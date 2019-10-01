const { expect } = require("chai");
const { updateInventory } = require("../katas/updateInventory");

describe.only("updateInventory", () => {
  it("should return array1 unchanged when array2 is passed as an empty array", () => {
    expect(updateInventory([[21, "Bowling Ball"]], [])).to.eql([
      [21, "Bowling Ball"]
    ]);
  });
  it("should return array1 with the inventory item quantity updated if the inventory item is present in array2", () => {
    expect(
      updateInventory([[21, "Bowling Ball"]], [[67, "Bowling Ball"]])
    ).to.eql([[88, "Bowling Ball"]]);
  });
  it("should return array1 with the inventory item quantity of multiple inventory items updated if passed items are present in array2", () => {
    expect(
      updateInventory(
        [[21, "Bowling Ball"], [2, "Cricket Ball"]],
        [[42, "Bowling Ball"], [4, "Cricket Ball"]]
      )
    ).to.eql([[63, "Bowling Ball"], [6, "Cricket Ball"]]);
  });
  it("should return array1 with any items added that are present array2, but not initially present in array 1 ", () => {
    expect(
      updateInventory([[21, "Bowling Ball"]], [[2, "Cricket Ball"]])
    ).to.eql([[21, "Bowling Ball"], [2, "Cricket Ball"]]);
  });
  it("should return array1 with the inventory item quantity of items updated from the same items in array 2 and must include any other items present in array2 that are not in array 1", () => {
    expect(
      updateInventory(
        [[21, "Bowling Ball"], [4, "Cricket Ball"]],
        [[2, "Cricket Ball"], [3, "Snooker Balls"]]
      )
    ).to.eql([[21, "Bowling Ball"], [6, "Cricket Ball"], [3, "Snooker Balls"]]);
  });
});
