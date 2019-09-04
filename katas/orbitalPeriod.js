function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  if (arr.length === 0) return [];
  const newArr = arr.map(obj => {
    const newObj = {};
    for (let key in obj) {
      if (key === "avgAlt") {
        let orbitalP = Math.round(
          2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj[key], 3) / GM)
        );
        console.log(orbitalP);
        newObj["orbitalPeriod"] = orbitalP;
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  });
  return newArr;
}

module.exports = { orbitalPeriod };
