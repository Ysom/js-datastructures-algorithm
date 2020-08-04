/**
 * 插入排序
 * 时间复杂度O(n*n) 空间复杂度O(1)
 * 属性：原地排序 稳定排序
 */

const insertionSort = (arr) => {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    let preIndex = i - 1, cur = arr[i]

    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = cur
  }

  return arr
}

let arr = [99, 1, 25, 24, 17, 18, 33]

console.log(insertionSort(arr))