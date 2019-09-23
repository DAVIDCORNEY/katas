const { expect } = require("chai");
const { checkCashRegister } = require("../katas/checkCashRegister");

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
    ).to.be.an("object");
  });
  it("should return an object with key value pairs of status:'CLOSED' and change: set to the cid array, if the change due is equal to the value of cash in the till ", () => {
    expect(
      checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ])
    ).to.eql({
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]
    });
  });
  it("should return an object with key value pairs of status:'INSUFFICIENT_FUNDS' and change: set to an empty array, if the change due is greater than the value of cash in the till ", () => {
    expect(
      checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ])
    ).to.eql({ status: "INSUFFICIENT_FUNDS", change: [] });
  });
  it("should return an object with key value pairs of status:'OPEN' and change: set to an array of the change due", () => {
    expect(
      checkCashRegister(19, 20, [
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
    ).to.eql({ status: "OPEN", change: [["ONE", 1]] });
  });
  it("should return an object with key value pairs of status:'OPEN' and change: set to an array of a number of denominations making up the change due", () => {
    expect(
      checkCashRegister(3.26, 100, [
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
    ).to.eql({
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04]
      ]
    });
  });
  it("should return an object with key value pairs of status:'INSUFFICIENT_FUNDS' and change: [],  if the change due cannot be returned from the change in the passed array", () => {
    expect(
      checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ])
    ).to.eql({
      status: "INSUFFICIENT_FUNDS",
      change: []
    });
  });
});
