function orbitalPeriod(arr) {
  if (arr.length === 0) return [];
  const newArr = arr.map(obj => {
    const newObj = {};
    for (let key in obj) {
      if (key === "avgAlt") {
        newObj["orbitalPeriod"] = obj[key];
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  });
  return newArr;
}

module.exports = { orbitalPeriod };
