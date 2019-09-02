const { expect } = require("chai");
const { truthCheck } = require("../katas/truthCheck");

describe.only("truthCheck()", () => {
  it("returns a boolean when passed an array of a single key value pair and a predicate", () => {
    const input = [{ sex: "Tinky-Winky" }];
    expect(truthCheck(input, "sex")).to.eql(true);
  });
});
