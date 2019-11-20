/**
 * 数据结构 二叉树 二叉搜索树（BST）
 * @desc 
 * 1. 二叉树中的节点最多只能有两个子节点，左节点和右节点
 * 2. 二叉搜索树是二叉树中的一种，只允许在左侧插入比父节点小的值，在右侧插入比父节点大的值
 */

import { Node } from './models/model' 
import { defaultCompare } from '../utils/utils'

// 创建一个二叉树类
class BinarySearchTree {
  
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null // 根节点
  }

  /**
   * @method 插入节点
   * @param {*} key 
   */
  insert (key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  /**
   * @method 在左侧或右侧插入子节点
   * @param {Node} node 
   * @param {*} key 
   */
  insertNode (node, key) {
    // 插入左侧子节点
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        // 递归检测
        this.insertNode(node.left, key)
      }
    } else {
      // 插入右侧子节点
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        // 递归检测
        this.insertNode(node.right, key)
      }
    }
  }
}