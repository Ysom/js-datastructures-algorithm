export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}


// 判断值是否相等
export function defaultEquals(a, b) {
  return a === b
}

// 比较两值大小
export function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
