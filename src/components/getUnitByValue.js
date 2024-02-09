export function getUnitByValue(value, [one, few, many]) {
  if (value >= 5 && value <= 20) {
    return many
  }
  if (value % 10 === 1) {
    return one
  }
  if (value % 10 >= 2 && value % 10 <= 4) {
    return few
  }
  return many
}

