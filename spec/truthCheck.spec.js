const { expect } = require("chai");
const { truthCheck } = require("../katas/truthCheck");

describe("truthCheck()", () => {
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
    const input1 = [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ];
    expect(truthCheck(input1, "sex")).to.eql(true);
    const input2 = [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ];
    expect(truthCheck(input2, "sex")).to.eql(false);
    const input3 = [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 }
    ];
    expect(truthCheck(input3, "age")).to.eql(false);
    const input4 = [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastFoward", onBoat: null }
    ];
    expect(truthCheck(input4, "onBoat")).to.eql(false);
    const input5 = [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastFoward", onBoat: true }
    ];
    expect(truthCheck(input5, "onBoat")).to.eql(true);
    const input6 = [{ single: "" }, { single: "double" }];
    expect(truthCheck(input6, "single")).to.eql(false);
    const input7 = [{ single: "double" }, { single: undefined }];
    expect(truthCheck(input7, "single")).to.eql(false);
    const input8 = [{ single: "double" }, { single: NaN }];
    expect(truthCheck(input8, "single")).to.eql(false);
  });
});
