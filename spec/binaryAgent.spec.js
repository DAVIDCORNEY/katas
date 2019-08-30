const { expect } = require("chai");
const { binaryAgent } = require("../katas/binaryAgent");

describe.only("binaryAgent()", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(binaryAgent("")).to.equal("");
  });
  it("should return an English letter or character when passed a single binary string", () => {
    expect(binaryAgent("01000001")).to.equal("A");
    expect(binaryAgent("01100010")).to.equal("b");
    expect(binaryAgent("01001001")).to.equal("I");
  });
  it("should return an English word when passed a binary string", () => {
    expect(binaryAgent("01001001 01110100")).to.equal("It");
    expect(binaryAgent("01100110 01110101 01101110")).to.equal("fun");
    expect(
      binaryAgent(
        "01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000"
      )
    ).to.equal("FreeCodeCamp");
  });
  it("should return an English sentance when passed a binary string", () => {
    expect(
      binaryAgent(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
      )
    ).to.equal("Aren't bonfires fun!?");
    expect(
      binaryAgent(
        "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
      )
    ).to.equal("I love FreeCodeCamp!");
  });
});
