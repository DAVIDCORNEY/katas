const { expect } = require("chai");
const { truthCheck } = require("../katas/truthCheck");

describe.only("truthCheck()", () => {
  it("returns a boolean when passed an array of an object with a single key value pair and a predicate", () => {
    const input = [{ sex: "Tinky-Winky" }];
    expect(truthCheck(input, "sex")).to.eql(true);
    expect(truthCheck(input, "age")).to.eql(false);
  });
  it("returns a boolean when passed an array of an object with multiple key value pairs and a predicate", () => {
    const input = [{ user: "Tinky-Winky", sex: "male" }];
    expect(truthCheck(input, "sex")).to.eql(true);
    expect(truthCheck(input, "age")).to.eql(false);
  });
  it("returns a boolean when passed an array with multiple objects each with a single key value pairs and a predicate", () => {
    const input1 = [{ sex: "male" }, { sex: "female" }];
    expect(truthCheck(input1, "sex")).to.eql(true);
  });
  it("returns a boolean when passed an array with multiple objects each with multiple key value pairs and a predicate", () => {
    const input = [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ];
    expect(truthCheck(input, "sex")).to.eql(true);
  });
});
