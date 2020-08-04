/**
 * 冒泡排序
 * 时间复杂度O(n*n) 空间复杂度O(1)
 * 属性：原地排序 稳定排序
 */

const bubbleSort = (arr, flag = 0) => {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }

  return flag ? arr.reverse() : arr
}

let arr = [99, 1, 25, 24, 17, 18, 33]

console.log(bubbleSort(arr))

console.log(bubbleSort(arr, 1))