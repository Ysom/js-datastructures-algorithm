/**
 * 数据结构 链表(linked list)
 * @desc
 * 1. 链表的元素在内存中存放并不是连续的
 * 2. 链表中每个元素存储了元素值和指向下一个元素的引用
 * 3. 查找每一个元素，都需要从表头开始迭代链表查找
 */

import { defaultEquals } from './utils/utils.js'
import { Node } from './models/model.js'

// 创建一个链表类
export class LinkedList {

  constructor (equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.count === 0
  }

  /**
   * @method 链表尾部添加元素
   * @param {*} element
   * 
   */
  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  /**
   * @method 获取指定位置的元素
   * @param {number} index 
   */
  getElementAt (index) {
    if (index < 0 || index >= this.count) {
      return undefined
    }
    let node = this.head
    for (let i = 0; i < index && node != null; i++) {
      node = node.next
    }
    return node
  }

    /**
   * @method 删除指定位置的元素
   * @param {number} index 
   */
  removeAt (index) {
    if (index >= this.count || index < 0) {
      return undefined
    }
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      let previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }

  /**
   * @method 任意位置添加元素
   * @param {*} element 
   * @param {number} index 
   * @return {boolean}
   */
  insert (element, index) {
    if (index < 0 || index > this.count) {
      return false
    }
    let node = new Node(element)
    if (index === 0) {
      let current = this.head
      node.next = current
      this.head = node
    } else {
      let previous = this.getElementAt(index - 1)
      let current = previous.next
      node.next = current
      previous.next = node
    }
    this.count++
    return true
  }

  /**
   * @method 获取元素索引
   * @param {*} element 
   * @return {number} index
   */
  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  /**
   * @method 删除指定元素
   * @param {*} element
   * @desc 
   * 1.结合indexOf方法和removeAt方法
   * 2.通过indexOf方法获取到元素对应索引
   * 3.通过removeAt方法删除对应索引的元素 
   */
  remove (element) {
    return this.removeAt(this.indexOf(element))
  }

  /**
   * @method 输出链表元素
   */
  toString () {
    if (this.head == null) {
      return ''
    }
    let str = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.count && current != null; i++) {
      str = `${str},${current.element}`
      current = current.next
    }
    return str
  }
}
