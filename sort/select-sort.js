/**
 * 选择排序
 * 时间复杂度O(n*n) 空间复杂度O(1)
 * 属性：原地排序 非稳定排序
 */

const selectSort = (arr) => {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    let min = i
    for (let j = i + 1; j < len - 1; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]]
  }

  return arr
}

let arr = [99, 1, 25, 24, 17, 18, 33]

console.log(selectSort(arr))

