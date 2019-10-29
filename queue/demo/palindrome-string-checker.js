/**
 * @demo 回文字符检查
 * @desc 
 * 1.判断一个字符串是否为回文字符串
 * 2.利用双端队列 首尾字符对比
 */

class Deque {

  constructor () {
    this.count = 0
    this.firstEle = 0
    this.items = {}
  }

  isEmpty () {
    return this.count - this.firstEle === 0
  }

  size () {
    return this.count - this.firstEle
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = `${this.items[this.firstEle]}`
    for(let i = this.firstEle + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }

  addFront (element) {
    if (this.isEmpty()) {
      this.addEnd(element)
    } else if (this.firstEle > 0) {
      this.firstEle--
      this.items[this.firstEle] = element
    } else {
      for(let i = this.count; i > this.firstEle; i--) {
        this.items[i] = this.items[i-1]
      }
      this.count++
      this.firstEle = 0
      this.items[0] = element
    }
  }

  addEnd (element) {
    this.items[this.count] = element
    this.count++
  }

  delFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.firstEle]
    delete this.items[this.firstEle]
    this.firstEle++
    return result
  }

  delEnd () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }

  getFirstEle () {
    return this.isEmpty() ? undefined : this.items[this.firstEle]
  }

  getEndEle () {
    return this.isEmpty() ? undefined : this.items[this.count - 1]
  }

  clear () {
    this.count = 0
    this.firstEle = 0
    this.items = {}
  }
}

/**
 * 
 * @param {string} str 
 * @return {boolean}
 */
function checker (str) {
  // 判断str是否为字符串
  if (Object.prototype.toString.call(str) !== '[object String]' || str === '') {
    return false
  }

  const deque = new Deque()
  let isEqual = true

  // 不区分大小写的情况 统一转成小写
  // let s = str.toLocaleLowerCase.split(' ').join()

  // 区分大小写
  let s = str.split(' ').join()

  for (let i = 0; i < s.length; i++) {
    deque.addEnd(s.charAt(i))
  }

  // 首尾字符串对比
  while (deque.size() > 1 && isEqual) {
    if (deque.delFront() !== deque.delEnd()) {
      isEqual = false
    }
  }

  return isEqual

}

console.log(checker('hellolleh'))
