/**
 * 数据结构 队列(queue)
 * 
 * @desc 
 * 1. 从队尾添加元素、从队首移除元素
 * 2. 遵守先进先出(FIFO)的原则
 */


// 创建一个队列类
class Queue {
  
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

  // 进列
  enQueue (element) {
    this.items[this.count] = element
    this.count++
  }

  // 出列并返回出列元素
  delQueue () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.firstEle]
    delete this.items[this.firstEle]
    this.firstEle++
    return result
  }

  // 输出队列
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = `${this.items[this.firstEle]}`
    for (let i = this.firstEle + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}` 
    }
    return str
  }

  // 获取队首元素
  getFirstEle () {
    return this.isEmpty() ? undefined : this.items[this.firstEle]
  }

  // 清空队列
  clear () {
    this.count = 0
    this.firstEle = 0
    this.items = {}
  }
}
