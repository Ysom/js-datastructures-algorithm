/**
 * 数据结构 有序链表(sorted linked list)
 * @desc
 * 1. 元素有序的链表
 * 2. 继承LinkedList类，重写insert方法
 */

import { defaultEquals } from '../utils/utils'
import { defaultCompare } from '../utils/utils' 
import { LinkedList } from './linked-list'

// 创建一个有序链表类
class SortedLinkedList extends LinkedList {

  constructor (equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  /**
   * @method 插入元素
   * @param {*} element 
   * @param {number} index 
   */
  insert (element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    let i = this.getSortedIndex(element)
    return super.insert(element, i)
  }

  /**
   * @method 获取元素要插入的位置
   * @param {*} element 
   * @return {number} index
   */
  getSortedIndex (element) {
    let current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      const result = this.compareFn(element, current.element)
      if (result === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}
