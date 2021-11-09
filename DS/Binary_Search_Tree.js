import { TreeNode } from "./Nodes.js";

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.val) return undefined;
      if (value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    if (!current) return false;
    while (current) {
      if (current.val == value) return true;
      if (value > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }
}

// Driver code
// this is a root node of a Binary Search Tree, where left nodes are less/smaller than the right nodes/sub tree;
export let root = new BinarySearchTree();
root.insert(30);
root.insert(50); // this go to root's (30)'s right as its greater than the root
root.insert(10); // this go to root's (30)'s left as its less than the root
root.insert(60);
root.insert(20);
console.log(root, 'from Binary_Search_Tree.js');


 /*  The above code constructs this tree
	 
//                    30
//                  /      \
//                10        50
//              /  \      /  \
//                  20         60
// 
	*/
