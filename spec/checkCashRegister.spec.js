const { expect } = require("chai");
const { checkCashRegister } = require("checkCashRegister");

describe("checkCashRegister()", () => {
  it("should return an object when passed an array", () => {
    expect(
      checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
      ])
    ).to.eql({ status: "OPEN", change: [["QUARTER", 0.5]] });
  });
});
