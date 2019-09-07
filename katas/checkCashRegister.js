function checkCashRegister(price, cash, cid) {
  const changeDue = cash - price;
  const tillTotal = cid.reduce((acc, curr) => acc + curr[1], 0);
  const changeStatus = {
    status: "OPEN",
    change: []
  };
  if (changeDue === tillTotal) {
    changeStatus["status"] = "CLOSED";
    changeStatus["change"] = cid;
  }
  return changeStatus;
}

module.exports = { checkCashRegister };

//work out the difference between the price and cash given and store in a variable "changeDue"
//work out the total value of all the cash in the till and store in a variable "tillTotal"
//if tillTotal is less than changeDue then return {status: "INSUFFICIENT_FUNDS", change: []}
//if tillTotal is the same as changeDue then return {status: "CLOSED", change: [all cid]}
