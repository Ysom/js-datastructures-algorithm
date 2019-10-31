/**
 * 数据结构 双向链表(doubly linked list)
 * @desc
 * 1. 每个元素存储了元素值、指向上一个元素的引用和下一个元素的引用
 * 2. 继承链表类，改造了push、insert、removeAt方法
 */

import { defaultEquals } from './utils/utils'
import { Node } from './models/model'
import { LinkedList } from './linked-list'

class DoublyNode extends Node {
  constructor (element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  /**
   * @method 链表尾部添加元素
   * @param {*} element 
   * @desc 
   * 1. 链表为空 head = tail = node
   * 2. 链表不为空 在tail后面插入
   */
  push (element) {
    const node = new DoublyNode(element)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      let current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    }
    this.count++
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
    const node = new DoublyNode(element)
    let current = this.head
    if (index === 0) {
      if (this.head == null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        current.prev = node
        this.head = node
      }
    } else if (index === this.count) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      let previous = this.getElementAt(index - 1)
      current = previous.next
      node.next = current
      previous.next = node
      current.prev = node
      node.prev = previous
    }
    this.count++
    return true
  }

  /**
   * @method 删除任意位置的元素
   * @param {number} index 
   */
  removeAt (index) {
    if (index < 0 || index >= this.count) {
      return undefined
    }
    let current = this.head
    if (index === 0) {
      let next = current.next
      next.prev = undefined
      this.head = next
      if (this.count === 1) {
        this.tail = undefined
      }
    } else if (index === this.count - 1) {
      current = this.tail.prev
      current.next = undefined
      this.tail = current
    } else {
      current = this.getElementAt(index)
      let previous = current.prev
      previous.next = current.next
      current.next.prev = previous
    }
    this.count--
    return current.element
  }
}
