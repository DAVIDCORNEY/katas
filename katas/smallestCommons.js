//change array so in ascending order
//loop through from min to max checking if all the nums are divisible by max
//if not increase max by itself and do the same procedure again

function smallestCommons(arr) {
  const sorted = arr.sort((a, b) => (a > b ? 1 : -1));

  let [min, max] = sorted;
  while (min < sorted[1]) {
    if (max % min === 0) {
      min++;
    } else {
      max += sorted[1];
      min = sorted[0];
    }
  }
  return max;
}

module.exports = { smallestCommons };
