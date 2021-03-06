import { Queue_SLL as Queue } from "./Queue_usingSLL.js";
import { TreeNode } from "./Nodes.js";


export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) { // inserts a value wherever space found
    if (!this.root) {
       this.root = new TreeNode(value);
	   return;
    }
    let q = new Queue();
    q.add(this.root);
    // Do level order traversal until we find an empty place.
    while (q.length) {
      let temp = q.remove();

      if (temp.left) { //check if there is any space in left side
		  q.add(temp.left);
      } else{
		temp.left = new TreeNode(value);
        break;
	  }

      if (temp.right) { //check if there is any space in right side
        q.add(temp.right);
      } else {
         temp.right = new TreeNode(value);
        break;
      }
    }
	return this.root;
  }

  find(value) { // return boolean for value present in tree or not
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
  
}


// Driver code
// this is a Binary Tree which will be initially null;
export let tree = new BinaryTree();

// then add the values to the Tree :
tree.insert(30);
tree.insert(50); 
tree.insert(10); 
tree.insert(60); 
tree.insert(20);
// tree.find(60)

export let root = tree.root; // exporting the main root of the careted tree Object;

// console.log(root, "from Binary_Tree.js");

 /*  The above code constructs this tree
	 
//                    30
//                  /     \
//                50      10
//              /  \     /  \
//             60  20         
// 
	*/

