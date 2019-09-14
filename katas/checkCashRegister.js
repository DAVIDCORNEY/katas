function checkCashRegister(price, cash, cid) {
  const changeToCustomer = cash - price;

  let changeDue = changeToCustomer;

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
    }
  }

  const changeTotal = changeStatus.change.reduce(
    (acc, curr) => acc + curr[1],
    0
  );
  if ((changeTotal * 100) / 100 === changeToCustomer) {
    return changeStatus;
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

module.exports = { checkCashRegister };
