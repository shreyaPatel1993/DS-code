

// ===============================  Graphs  ===========================================


//1. Find no. of connected components in a graph
function number_of_connected_components(n, edges) { 
   
    let _adjList = adjList(); //?
    let visited = new Array(n).fill(-1), components = 0;

    for(let i = 0; i< n; i++){
        if(visited[i] == -1){
            components++;
            visited[i] = 1;
            dfs(_adjList[i]);
        }
    }
    return components;

    function adjList(){
        let adjList = [];
        
        for(let i = 0; i < n; i++) adjList.push([]); 

        for(let i = 0; i < edges.length; i++){
            adjList[edges[i][0]].push(edges[i][1]);
            adjList[edges[i][1]].push(edges[i][0]);
        }
        return adjList;
    }

    function dfs(node){
        node//?
        for(let i = 0; i < node.length; i++){
            let neighbour = node[i];
            if(visited[neighbour] == -1){
                visited[neighbour] = 1;
                dfs(_adjList[neighbour]);
            }
        }
    }
}

number_of_connected_components(5, [[0, 1], [1, 2],  [2, 3], [3, 4], [4, 0]]);//?
// ================================================================================

// 2. is given graph a Tree 

function is_it_a_tree(node_count, edge_start, edge_end) {
    let _adjList =  createAdjList();
    _adjList//?
    let visited = new Array(node_count).fill(false), components = 0, parent = [-1];

    for(let i = 0; i < _adjList.length; i++){
        if(!visited[i]){
            visited[i] = true;
            components++;
            if(components >= 2) return false;
            if(dfs(_adjList[i])) return false;
        }
    }
 return true;
    function dfs(nodes){
        nodes//?
        for(let i = 0; i < nodes.length; i++){
            let curr = nodes[i]
            if(!visited[curr]){
                visited[curr] = true;
                parent[curr] = nodes[i];
                
                if(dfs(_adjList[curr])) return true;
                else if(curr !== parent[nodes[i]]) return true;
            }
        }
    }

    function createAdjList(){
        let list = []
        for(let i=0; i < node_count; i++){
            list.push([])
        }
        for(let i = 0; i < edge_start.length; i++){
            list[edge_start[i]].push(edge_end[i]);
            list[edge_end[i]].push(edge_start[i]);
        }
        return list;
    }
}

// is_it_a_tree(4, [0, 0, 0], [1, 2, 3]);//?
// is_it_a_tree(4, [0, 2, 0], [3, 1, 1]);//?
// is_it_a_tree(4, [3, 2, 0], [1, 0, 3]);//?

// is_it_a_tree(4, [0, 0], [1, 2])//?
// is_it_a_tree(4, [0, 0, 1, 2], [3, 1, 2, 0])//?
// is_it_a_tree(4, [0, 0, 0, 1], [1, 2, 3, 0])//?


/**
 * @param {int32} node_count
 * @param {list_int32} edge_start
 * @param {list_int32} edge_end
 * @return {bool}
 */
 function is_it_a_trees(node_count, edge_start, edge_end) {
    
   const visited = new Array(node_count).fill(false)
   const parentTable = new Array(node_count).fill(false) 
   const adjTable = initAdjTable(edge_start, edge_end, node_count)
    
    for (let i = 0; i < adjTable.length; i++) {
        if (!visited[i]) {
            let isCyclic = dfsAndCyclic(visited, adjTable, i, parentTable)
            if (isCyclic) return false // new line
        }
    }
            
    for (const adjacencies of adjTable) {
        if (adjacencies.length == 0) return false // we have an unconnected node
    }     
    return true
}

function dfsAndCyclic(visited, adjTable, vertex, parentTable) {
    visited[vertex] = true // marking as visited
    
    for (let i = 0; i < adjTable[vertex].length; i++) {
        let neighbor = adjTable[vertex][i]
        if (!visited[neighbor]) {
            parentTable[neighbor] = vertex // new line
            visited[neighbor] = true
            let cyclic = dfsAndCyclic(visited, adjTable, neighbor, parentTable)
            if (cyclic) return true // new line
        } else { // if visited neighbor node is not a parent
            if (parentTable[vertex] !== neighbor) return true // its cyclic, new line
        }
    }
    return false;
}

function initAdjTable(edgeStart, edgeEnd, nodeCount) {
    const adjTable = new Array(nodeCount).fill('').map(() => new Array())
            
    for (let i = 0; i < edgeStart.length; i++) {
        let [start, end] = [edgeStart[i], edgeEnd[i]];
        adjTable[start].push(end);
        adjTable[end].push(start);
    }
    return adjTable
}


// ===============================  Trees  ===========================================
console.log(Number.MIN_VALUE) //?
/* Convert Sorted List To Binary Search Tree: - IK class problem
Given a linked list with elements sorted in ascending order, convert it into a height-balanced binary search tree. */
/*
For your reference:
const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};*/
/**
 * @param {LinkedListNode_int32} head
 * @return {BinaryTreeNode_int32}
 */
 function sorted_list_to_bst(head) {
    if(!head) return null;
    let sortedArry = [];
    while(head){
        sortedArry.push(head.value);
        head = head.next;
    }
    
    return merge(0, sortedArry.length-1, sortedArry)
    
    function merge(start, end, arr){
        if(start > end) return null;
        let mid =  Math.floor((start + end)/2);
        
        let root = new BinaryTreeNode(arr[mid]);
        
        root.left = merge(start, mid-1, arr);
        root.right = merge(mid+1, end, arr);
        
        return root;
    }
 }
 
//=============================================================================================
/* Kth Smallest Element Of BST: IK test
Given a binary search tree (BST) and an integer k, find k-th smallest element. 
*/
/*
* Asymptotic complexity in terms of total number of nodes `n` and height of tree `h`:
* Time: O(n).
* Auxiliary space: O(h).
* Total space: O(n).
*/
function kth_smallest_element(root, k) {
    // kth smallest element is stored in this variable.
    let kth_element, counter = 0;
    get_k_th_element(root, k);
    return kth_element;

    function get_k_th_element(root, k){ // This function uses the idea of inorder_traversal.
        // either root is null or we have already found the answer.
        if (root == null || counter >= k) return;
        /* First try to find from left subtree as elements in left suubtree will be smaller than
        the root. */
        get_k_th_element(root.left, k);
        // If we have not found the answer till now.
        if (counter < k) {
            counter++;
            if (counter == k) { // If current node is the kth node.
                kth_element = root.value;
                return;
            }
            // We have explored left subtree and the root now explore right subtree.
            get_k_th_element(root.right, k);
        }
    }
}
//====================================================================================
/* Balanced BST From A Sorted Array: IK test and Class problem
Given a sorted list of distinct integers, build a balanced binary search tree (BST).
A BST is called balanced if the number of nodes in the left and right subtrees of every node differs by at most one.
 */
/**
 * @param {list_int32} a
 * @return {BinaryTreeNode_int32}
 */
 function build_balanced_bst(a) { // Use Merge sort/divide and Conq. strategy:
    
    return dfs(a, 0, a.length-1);
    
    function dfs(arr, start, end){
        if(start > end) return null;
        if(start == end) return new BinaryTreeNode(arr[start]);
        let mid = Math.floor((start + (end-start))/2);
        let rootNode = new BinaryTreeNode(arr[mid]);
        rootNode.left = dfs(arr, start, mid-1);
        rootNode.right = dfs(arr, mid+1, end);
        return rootNode;
    }
}
/*
* Asymptotic complexity in terms of length the given list `a` (`n`):
* Time: O(n).
* Auxiliary space: O(log(n)).
* Total space: O(n).
*/
//====================================================================================
/* Height Of A Tree: - IK test
Given a tree, find its height: number of edges in the longest path from the root to any node. 
*/
/* const TreeNode = class {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
};*//**
 * @param {TreeNode_int32} root
 * @return {int32}
 */
 function find_height(root) {
    if(!root) return 0;
  return dfs(root);

 function dfs(node){
    let maxH = 0;
    if(!node.children.length) return 0;
     
    node.children.forEach((child) =>{
       let count =  dfs(child)+1;
       maxH = Math.max(maxH, count);
    });

    return maxH;
 }
}
//====================================================================================
/* Print All Paths That Sum To K: - IK class problem
Given a binary tree and an integer k, find all the root to leaf paths that sum to k. */
/**
 * @param {BinaryTreeNode_int32} root
 * @param {int32} k
 * @return {list_list_int32}
 */
 function all_paths_sum_k(root, k) {
    if(!root) return [[-1]];
    let res = [];
    dfs(root, k, []);
    return res.length ? res : [[-1]];
    
    function dfs(node, sum, slate){
        if(!node.left && !node.right){
            if(sum == node.value){
                slate.push(node.value);
                res.push([...slate]);
                slate.pop();
            } 
            return;
        }
        slate.push(node.value);
        if(node.left) dfs(node.left, sum-node.value, slate);
        if(node.right) dfs(node.right, sum-node.value, slate);
        slate.pop();
    }
    
}

//====================================================================================

/**  Root To Leaf Path Sum Equal To K - IK class problems:
Given a binary tree and an integer k, 
check whether the tree has a root to leaf path with a sum of values equal to k.
/*
/**
 * @param {BinaryTreeNode_int32} root
 * @param {int32} k
 * @return {bool}
 */
 function path_sum(root, k) {
    if(!root) return false;
    let res = false;
    dfs(root, k);
    return res;
    
    function dfs(node, sum){
        if(!node.left && !node.right){
            if(sum == node.value) res = true;
            return;
        }
        if(node.left) dfs(node.left, sum-node.value);
        if(node.right) dfs(node.right, sum-node.value)
    }
}
//====================================================================================



/* 103. Binary Tree Zigzag Level Order Traversal - IK live class
 Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
 (i.e., from left to right, then right to left for the next level and alternate between).*/ 
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let res = [], q = [root], rightToLeft = false;
    while(q.length){
        let temp = [], len = q.length;
        for(let i = 0; i<len; i++){
           let node = q.shift();
            temp.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        if(rightToLeft) temp.reverse();
        rightToLeft = !rightToLeft
        res.push(temp)
    }
    return res;
};
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
//====================================================================================
/* 
199. Binary Tree Right Side View - IK live class
Given the root of a binary tree, imagine yourself standing on the right side of it,
 return the values of the nodes you can see ordered from top to bottom. */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if(!root) return [];
       let res = [];
       let q = [];
       q.push(root);
       
       while(q.length){
           let last;
           let len = q.length;
           for(let i = 0; i < len; i++){
               let node = q.shift();
               last = node.val;
             if(node.left) q.push(node.left);
             if(node.right) q.push(node.right);  
           }
            res.push(last);
       }
       return res;
   };

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

//====================================================================================
/**
107. Binary Tree Level Order Traversal II - IK live class
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
(i.e., from left to right, level by level from leaf to root). */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
    if(!root) return [];
    let res = [];
    let q = [];
    q.push(root);
    
    while(q.length){
        let temp = [];
        let len = q.length;
        for(let i = 0; i < len; i++){
            let node = q.shift();
            temp.push(node.val);
          if(node.left) q.push(node.left);
          if(node.right) q.push(node.right);  
        }
         res.push(temp);
    }
    return res.reverse();
};
// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]
//===============================================================
/**429. N-ary Tree Level Order Traversal - IK live class
Given an n-ary tree (val and its children[]), return the level order traversal of its nodes' values. */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };/ /**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrderChildren = function(root) {
    if(!root) return [];
    
    let res = [];
    let q = [];
    q.push(root);
    
    while(q.length){
        let temp = []
        let len = q.length;
        for(let i = 0; i < len; i++){
            let node = q.shift();
            temp.push(node.val);
            // push every child of the node to the q:
            node.children.forEach(child => { 
                q.push(child); 
            });     
        }
        res.push(temp);
    }
    return res;
};
// levelOrderChildren([1,null,3,2,4,null,5,6]);
//[[1],[3,2,4],[5,6]]
//========================================================================

/*  102. Binary Tree Level Order Traversal - IK Live class
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let q = [];
    q.push(root);
    
    while(q.length){
        let len = q.length, temp = [];
        for(let i = 0; i < len; i++ ){
            let curr = q.shift();
            temp.push(curr.val)
             if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
           
        }
        res.push(temp)
    }
    
    return res;
};
// levelOrder([3,9,20,null,null,15,7]);
//[[3],[9,20],[15,7]]
// ===============================  Recursion  ===========================================
// Find All Well-formed Brackets - Timed test IK
// Given a positive integer n, return ALL strings of length 2 * n with well-formed round brackets.

function parenthesis(n){

    let res = [];
    let open = 0, close = 0;

    helper(0, [], n*2, open, close);
    return res;

    function helper(i, slate, len, open, close){
        if(open < close || open > n || close > n) return; // backtracking

        if(i == len) { // base
            if(open == close) res.push(slate.join('')); 
            return;
        }
    //Recursive to generate combinations of '(' and ')'
        slate.push('(');
        helper(i+1, slate, len, open+1, close);
        slate.pop();

        slate.push(')');
        helper(i+1, slate, len, open, close+1);
        slate.pop();
    }

    // function isValid(input){
    //     for(let i = 0; i < input.length; i++){
    //         let curr = input[i];

    //         if(curr == '(') open++;
    //         if(curr == ')') close++;
    //         if(open < close) return false;
    //         if(open > n || close > n) return false;
    //     }
    //     return open == close && close+open == n*2///?
    // }
}

// parenthesis(3); //?
// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

// ==========================================================================

function generate_all_combinations(arr, target) {
    let res = [];
    arr.sort((a,b) => a-b);
    helper(0, [], 0)
    return res;
    
    function helper(i, slate, sum){
        if(sum == target){
             res.push([...slate]);
             return;
        }
        if(i==arr.length || sum > target) return;

      for(let j = i; j<arr.length; j++){
          if(arr[j] === arr[j-1] && j>i) continue;
              slate.push(arr[j]);
              helper(j+1, slate, sum+arr[j]);
              slate.pop();
      }
  }
}
// generate_all_combinations([1, 2, 3, 3, 4, 5], 6); //?
// [ [ 1, 2, 3 ], [ 1, 5 ], [ 2, 4 ], [ 3, 3 ] ]
// ==========================================================================

// Subsets With Duplicate Characters-
// Given a string that might contain duplicate characters, find all the possible distinct subsets of that string.
// The function accepts a STRING as parameter and is expected to return a STRING ARRAY.
function get_distinct_subsets(str) {
    const s = str.split('').sort(), res = [];
    helper(s, 0, []);
    return res;
   
    function helper(s, i, slate) {
        if(i === s.length){
            res.push(slate.join(''));
            return;
        }
        
        let count = 0;
        for(let j = i; j < s.length; j++) {
            if(s[j] == s[i]) count++;
        }
        
        helper(s, i + count, slate); // Exclude
        
        for(let c = 0; c < count; c++) { // include copies
            slate.push(s[i]);
            helper(s, i + count, slate);
        }

        for(let c = 0; c < count; c++) slate.pop();
        
    }
}
// get_distinct_subsets('aab'); //?
// [ '', 'b', 'a', 'ab', 'aa', 'aab' ]
// get_distinct_subsets('dc'); //?
// [ '', 'd', 'c', 'cd' ]
// ==========================================================================
// Given an array of numbers with possible duplicates, return all unique permutations in any order.

function get_permutations_dup(arr) {
    let res = [];
    helper(0, [])
    return res;

    function helper(i, slate) {
        if (i == arr.length) {
            res.push([...slate]);
            return;
        }
        let unique = new Set();
        for (let j = i; j < arr.length; j++) {
            if (!unique.has(arr[j])) {
                unique.add(arr[j]);
                [arr[i], arr[j]] = [arr[j], arr[i]];
                slate.push(arr[i])
                helper(i + 1, slate);
                slate.pop();
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}
// get_permutations_dup([1,2,2]); //?
// [ [1, 2, 2], [2, 1, 2], [2, 2, 1] ]

// ==========================================================================
// find all combinations (no repeatition) from 1 to n with k length - n choose k combinations

function find_combinations(n, k) {
    let res = []
    helper([], 1);
    return res; 

    function helper(slate, count){
        if(slate.length == k){
            res.push([...slate]);
            return;
        }
        let used = new Set();
        while(n >= count){ 
            if(!used.has(count)){
                used[count] = 1;
                slate.push(count);
                helper(slate, count+1)
                slate.pop();
                count++;
            }
        }
    }
}
// find_combinations(5, 2);//?
// [ [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]]
// ==========================================================================

//create all permutations of given unique inputs/elements
function get_permutations(arr) {

    let res = [];
    helper(arr, 0, []);
    return res;

    function helper(arr, i, slate) {
        if (i >= arr.length) {
            res.push([...slate]);
            return;
        }
        for (let j = i; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            slate.push(arr[i]);
            helper(arr, i + 1, slate)
            slate.pop();
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
}
    // get_permutations([1,2,3])//?
    // [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 2, 1 ], [ 3, 1, 2 ] ]
// ==========================================================================
// count how many non empty subsets of given numbers whose sum = k, not: it cannot be empty subset - Timed test IK
// if you want to check empty subsets then remove size

function subsetSum(arr, k){

    return helper(0, k, 0);

    function helper(i, sum, size){
        // backtracking
        if(sum == 0 && size >0) return 1;
        // base case:
        //if all given numbers are positive or its sorted then we can use one more base case for sum > k, then return 0
        if(i == arr.length) return 0;
        // recursive case
        //  1. include:                   2. exclude
        return helper(i+1, sum-arr[i], size+1) + helper(i+1, sum, size);
        
    }
}
// subsetSum([2,6,3,5], 0)//?

// ==========================================================================

var letterCasePermutation = function(s) {
    let res = [];
    helper(s, 0, []);
    return res;

    function helper(s, i, slate){
       
        if(i == s.length){
            res.push(slate.join(''));
            return;
        } 
         if(isNaN(s[i])){
            slate.push(s[i].toUpperCase());
            helper(s, i+1, slate);
            slate.pop();
            slate.push(s[i].toLowerCase());
            helper(s, i+1, slate);
            slate.pop();
        } else {
            slate.push(s[i]);
            helper(s, i+1, slate);
            slate.pop();
        }
    }
};
// letterCasePermutation("a1b2"); //?
// [ 'A1B2', 'A1b2', 'a1B2', 'a1b2' ]
// ====================================================================================

// ===================================  Sorting =======================================

function merge_sort(arr) {

    if (arr.length == 1) {
      return arr;
    }
    let start = 0, end = arr.length, mid = Math.floor((start+end)/2);
    let left = arr.slice(start, mid), right = arr.slice(mid, end);

    let arr1 = merge_sort(left)
    let arr2 = merge_sort(right)
 
    return merge(arr1, arr2);
 }

function merge(arr1, arr2){ // merge two sorted arrays

    let i = 0, j = 0, res = [];
    while(i <=arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j])res.push(arr1[i++]); 
        else res.push(arr2[j++]);
    }

    while(i < arr1.length) res.push(arr1[i++]);
    while(j < arr2.length) res.push(arr2[j++]);
    return res;
}

// merge_sort([7,6,5,4,9,2,5]); 

// ==========================================================================

function dutch_flag_sort(balls) {
    let g = -1, r = -1;

    for(i = 0; i < balls.length; i++){
        let curr = balls[i];
        if(curr == 'G'){
            g++;
            [balls[i], balls[g]] = [balls[g], balls[i]];
        } else if(curr == 'R'){
            g++;
            [balls[i], balls[g]] = [balls[g], balls[i]];
            r++;
            [balls[g], balls[r]] = [balls[r], balls[g]];
        }
    }
    return balls;
}

// dutch_flag_sort(["R","G","B", "R"])

// ==========================================================================

var threeSum = function(counts) {
    counts = counts.sort((a,b) => a-b);
    let i = 0, j = counts.length-1, res = [];
    for(let k = 0; k < counts.length-1; k++){
        while(i < j){
         if(counts[i] + counts[j] <= 0) j--;
         if(counts[i] + counts[j] >= 0) i++;
         if(counts[i] + counts[j] + counts[k] == 0) res.push([i, j, k])
        }
    }
    return res;
};

// threeSum([-1,0,1,2,-1,-4]) 