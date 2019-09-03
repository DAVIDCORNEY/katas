const { expect } = require("chai");
const { addTogether } = require("../katas/addTogether");

describe.only("addTogether()", () => {
  it("should return the sum of two arguments if passed two argumets", () => {
    expect(addTogether(1, 2)).to.equal(3);
  });
});
