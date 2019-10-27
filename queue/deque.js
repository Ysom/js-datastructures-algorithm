/**
 * 数据结构 双端队列(double-ended queue)
 * 
 * @desc 
 * 1. 可以从队首和队尾添加、移除元素的队列
 * 2. 遵守先进先出(FIFO)、后进先出(LIFO)的原则
 */


// 创建一个双端队列类
class Deque {

  constructor () {
    this.count = 0
    this.firstEle = 0
    this.items = {}
  }

  // 是否空队列
  isEmpty () {
    return this.count - this.firstEle === 0
  }

  // 队列长度
  size () {
    return this.count - this.firstEle
  }

  // 输出队列
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

  // 队首添加元素
  addFront (element) {
    // 队列为空时，调用队尾添加元素方法
    if (this.isEmpty()) {
      this.addEnd(element)
    } else if (this.firstEle > 0) { // 队首元素序号大于0时 队首元素序号减1 添加元素
      this.firstEle--
      this.items[this.firstEle] = element
    } else { // 队首序号为0时，全部元素后移一位
      for(let i = this.count; i > this.firstEle; i--) {
        this.items[i] = this.items[i-1]
      }
      this.count++
      this.firstEle = 0
      this.items[0] = element
    }
  }

  // 队尾添加元素
  addEnd (element) {
    this.items[this.count] = element
    this.count++
  }

  // 队首删除元素并返回被删元素
  delFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.firstEle]
    delete this.items[this.firstEle]
    this.firstEle++
    return result
  }

  // 队尾删除元素并返回被删元素
  delEnd () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }

  // 获取队首元素
  getFirstEle () {
    return this.isEmpty() ? undefined : this.items[this.firstEle]
  }

  // 获取队尾元素
  getEndEle () {
    return this.isEmpty() ? undefined : this.items[this.count - 1]
  }

  // 清空队列
  clear () {
    this.count = 0
    this.firstEle = 0
    this.items = {}
  }
}
