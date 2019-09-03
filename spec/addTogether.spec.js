const { expect } = require("chai");
const { addTogether } = require("../katas/addTogether");

describe.only("addTogether()", () => {
  it("should return undefined if any passed arguments are not numbers", () => {
    expect(addTogether(1, "2")).to.be.undefined;
  });
});
