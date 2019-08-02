const { expect } = require("chai");
const { spinalCase } = require("../katas/spinalCase");

describe.only("spinalCase()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(spinalCase("")).to.equal("");
  });
  it("should return a spinal case string when passed a camelcase string", () => {
    expect(spinalCase("aB")).to.equal("a-b");
    expect(spinalCase("turnIntoSpinalCase")).to.equal("turn-into-spinal-case");
  });
  it("should return a spinal case string when passed a string with each word capitalised", () => {
    expect(spinalCase("A B")).to.equal("a-b");
    expect(spinalCase("About regex kata")).to.equal("about-regex-kata");
  });
  it("should return a spinal case string when passed a string that already includes words seperated by a dash", () => {
    expect(spinalCase("A b-c")).to.equal("a-b-c");
    expect(spinalCase("About regex-kata")).to.equal("about-regex-kata");
  });
  it("should return a spinal case string when passed a string that includes a mix of words the are camelCase, capitalised and seperated by dashes", () => {
    expect(spinalCase("aboutRegex Kata-today")).to.equal(
      "about-regex-kata-today"
    );
  });
});
