/**
 * 快速排序
 * 时间复杂度O(nlogn)
 * 属性：非原地排序 稳定排序
 */

const quickSort = (arr) => {
  // 递归终止条件
  if (arr.length <= 1) return arr
  // 获取中间索引 Math.floor向下取整
  let mid = Math.floor(arr.length / 2)

  let pivot = arr.splice(mid, 1)[0],
    left = [],
    right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

let arr = [99, 1, 25, 24, 17, 18, 33]

console.log(quickSort(arr))
