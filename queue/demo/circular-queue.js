/**
 * @demo 击鼓传花
 * @desc 
 * 1.每次从队列里按一定规律抽出某个元素，直到剩一个元素
 * 2.利用队列实现循环队列
 */

class Queue {
  
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

  enQueue (element) {
    this.items[this.count] = element
    this.count++
  }

  delQueue () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.firstEle]
    delete this.items[this.firstEle]
    this.firstEle++
    return result
  }

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

  getFirstEle () {
    return this.isEmpty() ? undefined : this.items[this.firstEle]
  }

  clear () {
    this.count = 0
    this.firstEle = 0
    this.items = {}
  }
}

/**
 * 
 * @param {array} elementList 
 * @param {number} num 
 */

function circle (elementList, num) {
  const queue = new Queue()
  const list = []

  for (let i = 0; i < elementList.length; i++) {
    queue.enQueue(elementList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enQueue(queue.delQueue())
    }
    list.push(queue.delQueue())
  }

  return {
    list: list,
    winner: queue.delQueue()
  }
}

console.log(circle(['Ysom','Jack','Tony','Huzi','Kerry'], 7))
