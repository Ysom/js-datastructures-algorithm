/**
 * 归并排序
 * 时间复杂度O(nlogn)
 * 属性：非原地排序 稳定排序
 */

const mergeSort = (arr) => {
  // 递归终止条件
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  // 拆分左右数组
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  let mergeLeft = mergeSort(left)
  let mergeRight = mergeSort(right)

  return merge(mergeLeft, mergeRight)
}

// 合并数组
const merge = (left, right) => {
  let result = []

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while(left.length) {
    result.push(left.shift())
  }

  while(right.length) {
    result.push(right.shift())
  }

  return result
}

let arr = [99, 1, 25, 24, 17, 18, 33]

console.log(mergeSort(arr))