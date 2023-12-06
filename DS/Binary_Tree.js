import { Queue_SLL as Queue } from "./Queue_usingSLL.js";
import { TreeNode } from "./Nodes.js";


export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // inserts a value wherever space found
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }
    let q = new Queue();
    q.add(this.root);
    // Do level order traversal until we find an empty place.
    while (q.length) {
      let temp = q.remove();

      if (temp.left) {
        //check if there is any space in left side
        q.add(temp.left);
      } else {
        temp.left = new TreeNode(value);
        break;
      }

      if (temp.right) {
        //check if there is any space in right side
        q.add(temp.right);
      } else {
        temp.right = new TreeNode(value);
        break;
      }
    }
    return this.root;
  }

  find(value) {
    // return boolean for value present in tree or not
    if (!this.root) return false;
    let q = new Queue();
    q.add(this.root);
    // Do level order traversal until we find the value
    while (q.length) {
      let temp = q.remove();
      if (temp.val == value) return true;
      if (temp.left) q.add(temp.left);
      if (temp.right) q.add(temp.right);
    }
    return false;
  }


  arrayToTree(arr) { // to Solve leet code problems where node's value are given in form of array;
    let i = 0;
    this.root = arr[i] == null ? null : new TreeNode(arr[i]);
    let q = new Queue()
    q.add(this.root);
    i++;
    while (q.length && i < arr.length) {
      let first = q.remove();
      if (first != null) {
        first.left = arr[i] == null ? null : new TreeNode(arr[i]);
        q.add(first.left);
        i++;
        if (i >= arr.length) {
          break;
        }
        first.right = arr[i] == null ? null : new TreeNode(arr[i]);
        q.add(first.right);
        i++;
      }
    }
    return this.root;
  }
}
  



// Driver code:

// this is a new Binary Tree Object where the root will be initially null as nothing is inserted/added to it.
export let tree = new BinaryTree();
// Example 1: adding value to tree
tree.arrayToTree([3, 9, 20, null, null, 15, 7]); // you can add these values where both left and right child of 9 will be null
export let root = tree.root; // exporting the main root of the created tree Object.
// console.log(root, "from Binary_Tree.js");

 /*  The above code of tree constructs this tree
	 
//                    3
//                  /   \
//                 9     20
//               /  \   /  \
//                     15   7        
// 
	*/
// =====================================================================================================================
// Example 2:
tree.arrayToTree([30, 50, 10, 60, 20]); // you can add values to the tree by providing an array like this

// or you can also create a tree and insert values on the go one by one like this:
let newTree = new BinaryTree();
// Example 3: add the values to the Tree like this:
newTree.insert(30);
newTree.insert(50); 
newTree.insert(10); 
newTree.insert(60); 
newTree.insert(20);
// tree.find(60)


 /*  The above code of tree(e.g 2) and newTree(e.g 3)constructs this tree:
	 
//                    30
//                  /    \
//                50     10
//              /  \    /  \
//             60  20         
// 
	*/


