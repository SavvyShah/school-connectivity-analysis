export default function maxValueInRegion(ThingsInRegion) {
  let maxValue = 0
  for (let region in ThingsInRegion) {
    maxValue =
      ThingsInRegion[region].length > maxValue
        ? ThingsInRegion[region].length
        : maxValue
  }
  console.log(maxValue)
  return maxValue
}
