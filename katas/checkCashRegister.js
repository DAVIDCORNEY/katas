function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  const tillTotal = cid.reduce((acc, curr) => acc + curr[1], 0);

  const changeStatus = {
    status: "OPEN",
    change: []
  };

  const money = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  if (changeDue === tillTotal) {
    changeStatus["status"] = "CLOSED";
    changeStatus["change"] = cid;
  } else if (changeDue > tillTotal) {
    changeStatus["status"] = "INSUFFICIENT_FUNDS";
    changeStatus["change"] = [];
  } else if (changeDue < tillTotal) {
    for (let i = money.length - 1; i >= 0; i--) {
      while (changeDue >= money[i][1] && cid[i][1] > 0) {
        let denomination = money[i][1];
        let numOfDenomination =
          Math.floor(changeDue.toFixed(2) / denomination) * money[i][1];
        console.log(changeDue, denomination, numOfDenomination);
        if (cid[i][1] <= numOfDenomination) {
          changeStatus.change.push([cid[i][0], cid[i][1]]);
          changeDue -= cid[i][1];
          cid[i][1] = 0;
        } else if (cid[i][1] >= numOfDenomination) {
          changeStatus.change.push([cid[i][0], numOfDenomination]);
          changeDue -= numOfDenomination;
          cid[i][1] -= numOfDenomination;
        }
      }
      console.log(changeDue);
    }
  }
  return changeStatus;
}

module.exports = { checkCashRegister };

//work out the difference between the price and cash given and store in a variable "changeDue"
//work out the total value of all the cash in the till and store in a variable "tillTotal"
//if tillTotal is less than changeDue then return {status: "INSUFFICIENT_FUNDS", change: []}
//if tillTotal is the same as changeDue then return {status: "CLOSED", change: [all cid]}
//
