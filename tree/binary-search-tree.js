/**
 * 数据结构 二叉树 二叉搜索树（BST）
 * @desc 
 * 1. 二叉树中的节点最多只能有两个子节点，左节点和右节点
 * 2. 二叉搜索树是二叉树中的一种，只允许在左侧插入比父节点小的值，在右侧插入比父节点大的值
 */

import { Node } from './models/model' 
import { Compare, defaultCompare } from '../utils/utils'



let keyList = []

function printKey (key) {
  // console.log(key)
  keyList.push(key)
}

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

  /**
   * @method 中序遍历-辅助方法
   * @param {function} callback 
   */
  inOrderTraverse (callback) {
    keyList = []
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * @method 中序遍历-具体方法
   * @param {Node} node 
   * @param {function} callback 
   */
  inOrderTraverseNode (node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * @method 先序遍历-辅助方法
   * @param {function} callback 
   */
  preOrderTraverse (callback) {
    keyList = []
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * @method 先序遍历-具体方法
   * @param {Node} node 
   * @param {function} callback 
   */
  preOrderTraverseNode (node, callback) {
    if (node) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * @method 后序遍历-辅助方法
   * @param {function} callback 
   */
  afterOrderTraverse (callback) {
    keyList = []
    this.afterOrderTraverseNode (this.root, callback)
  }

  /**
   * @method 后序遍历-具体方法
   * @param {Node} node 
   * @param {function} callback 
   */
  afterOrderTraverseNode (node, callback) {
    if (node) {
      this.afterOrderTraverseNode(node.left, callback)
      this.afterOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(1)
tree.insert(6)
tree.insert(12)
tree.insert(11)
tree.insert(13)

// 中序、先序、后序是表明父节点在遍历时的顺序
// 中序
tree.inOrderTraverse(printKey)
console.log(`中序遍历：${keyList.join(',')}`)

// 先序
tree.preOrderTraverse(printKey)
console.log(`先序遍历：${keyList.join(',')}`)

// 后序
tree.afterOrderTraverse(printKey)
console.log(`后序遍历：${keyList.join(',')}`)
