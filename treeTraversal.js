import { BST, BT, SLL, DLL, BinarySearchTree, BinaryTree, SinglyLinkedList, Queue, DoublyLinkedList } from "./Package.js";

// Binary Tree level order traversal: left to right Traversal (BFS) - (LeetCode: #102)
// Adding nodes values to an 2D Array

function levelOrder(root) {
    
  if (!root) return;
  let q = new Queue();
  let res = [];
  q.add(root);

  while (q.length) {
    let count = q.length;
    let temp = [];
    while (count--) {
      let first = q.remove();
      temp.push(first.val);
      if (first.left) q.add(first.left);
      if (first.right) q.add(first.right);
    }
    res.push(temp);
  }
  return res;
}

console.log(levelOrder(BT));
// output: [[30], [50, 10], [60,20]]

 /*  The above BT passed as arguments is this tree below:
	 
//                    30
//                  /     \
//                50      10
//              /  \     /  \
//             60  20         
// 
	*/