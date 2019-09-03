const { expect } = require("chai");
const { addTogether } = require("../katas/addTogether");

describe.only("addTogether()", () => {
  it("should return undefined if any passed arguments are not numbers", () => {
    expect(addTogether("1")).to.be.undefined;
    expect(addTogether(1, "2")).to.be.undefined;
    expect(addTogether("http://bit.ly/IqT6zt")).to.be.undefined;
  });
  it("should return the sum of two numbers passed as arguments", () => {
    expect(addTogether(1, 2)).to.equal(3);
  });
});
