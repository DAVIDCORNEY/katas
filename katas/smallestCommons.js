//change array so in ascending order
//loop through from min to max checking if all the nums are divisible by max
//if not increase max by itself and do the same procedure again

function smallestCommons(arr) {
  let max = Math.max(...arr);
  const min = Math.min(...arr);
  let maxNum = max;

  const newArr = [];
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }

  function checkDividers(newArr, maxNum) {
    for (let i = 0; i < newArr.length; i++) {
      if (maxNum % i !== 0) {
        return false;
      }
    }
    return true;
  }

  if (checkDividers(newArr, maxNum) === false) {
    maxNum += max;
    return maxNum;
  }
  return max;
}

module.exports = { smallestCommons };
