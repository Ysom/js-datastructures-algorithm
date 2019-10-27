/**
 * 数据结构 栈(stack)
 * 
 * @desc 
 * 1. 从栈顶添加、移除元素
 * 2. 遵守后进先出(LIFO)的原则
 */

// 创建一个简单的栈类（基于数组）
class Stack {
  constructor () {
    this.items = []
  }

  // 入栈
  push (element) {
    this.items.push(element)
  }

  // 出栈并返回出栈的元素
  pop () {
    return this.items.pop()
  }

  // 获取栈顶元素
  getTopElement () {
    return this.items[this.items.length - 1]
  }

  // 判断栈是否为空
  isEmpty () {
    return this.items.length === 0
  }

  // 返回栈的元素个数
  size () {
    return this.items.length
  }

  // 清空栈
  clear () {
    this.items = []
  }
}

// 创建一个基于对象的栈类
class ObjStack {
  constructor () {
    this.count = 0
    this.items = {}
  }

  // 是否空栈
  isEmpty () {
    return this.count === 0
  }

  // 栈元素个数
  size () {
    return this.count
  }

  // 打印栈内容
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }

  // 入栈
  push (element) {
    this.items[this.count] = element
    this.count++
  }

  // 出栈
  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // 查看栈顶值
  getTopElement () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // 清空栈
  clear () {
    this.count = 0
    this.items = {}

    /**
     * @or
     * 
     *  while (this.isEmpty()) {
     *    this.pop()
     *  }
     * 
     */
  }
}

 /**
  * @demo 十进制转换多进制（0-Z满足 2~36进制）
  * @desc 余数依次入栈 依次出栈组成进制数
  * @param {number} number 
  * @param {string} base 
  */

function binaryConversion (number, base) {
  const remStack = new ObjStack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let subNumber = number
  let str = ''

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  while (subNumber > 0) {
    rem = subNumber % base
    remStack.push(rem)
    subNumber = Math.floor(subNumber / base)
  }

  while (!remStack.isEmpty()) {
    // rem匹配对应digits里面的字符
    str += digits[remStack.pop()]
  }

  return str
}

console.log({
  binaryConversion: binaryConversion(35, 36)
})
// { binaryConversion: 'Z' }
// 35在36进制里面用Z表示
