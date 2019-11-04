/**
 * 数据结构 循环链表(circular linked list)
 * @desc
 * 1. 可以分为单向引用和双向引用
 * 2. 每个元素存储了元素值、指向上一个元素的引用（双向引用）和下一个元素的引用
 * 3. 尾部元素next指向头部，头部prev指向尾部（双向引用）
 * 4. 继承链表类，改造了push（双向引用）、insert、removeAt方法
 */

import { defaultEquals } from './utils/utils'
import { Node } from './models/model'
import { LinkedList } from './linked-list'

// 创建一个循环链表类
class CircularLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals) {
    super(equalsFn)
  }

  /**
   * @method 任意位置插入元素
   * @param {*} element 
   * @param {number} index 
   */
  insert (element, index) {
    if (index < 0 || index > this.count) {
      return false
    }
    const node = new Node(element)
    if (index === 0) {
      if (this.head == null) {
        this.head = node
        node.next = this.head
      } else {
        let current = this.head
        node.next = current
        // 获取最后一个元素 将指针指向头部元素
        current = this.getElementAt(this.size() - 1)
        this.head = node
        current.next = this.head
      }
    } else {
      let previrous = this.getElementAt(index - 1)
      node.next = previrous.next
      previrous.next = node
    }
    this.count++
    return true
  }

  /**
   * @method 任意位置删除元素
   * @param {number} index 
   */
  removeAt (index) {
    if (index < 0 || index >= this.count) {
      return undefined
    }
    let current = this.head
    if (index === 0) {
      if (this.size() === 1) {
        this.head = undefined
      } else {
        // 链表不止一个元素的情况
        let removed = this.head
        let current = this.getElementAt(this.size() - 1)
        this.head = this.head.next
        current.next = this.head
        current = removed
      }
    } else {
      let previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }
}
