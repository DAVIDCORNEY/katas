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
  it("should return a function when passed an argument of one number", () => {
    expect(addTogether(1)).to.be.a("function");
  });
  it("should return the sum of passed arguments on invocation of the returned function", () => {
    const sumTwoAnd = addTogether(2);
    expect(sumTwoAnd(3)).to.equal(5);
  });
  it("should return undefined if the argument passed into the returned function is not a number", () => {
    const sumTwoAnd = addTogether(2);
    expect(sumTwoAnd([3])).to.be.undefined;
  });
});
