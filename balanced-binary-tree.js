/*
 * Submission date: March 19, 2019
 * Runtime: 72ms
 * Faster than: 91.11%
 * Memory Usage: 37.3 MB
 * Less than: 78.35%
 */

// simple brute force algorithm
// checks every single node to see if its balanced
// to check if a node is balanced is to check if the maximal height
// of its two children nodes are at most 1 apart
// there are two recursive functions at play in this solution

// can be optimized to be much faster by checking only
// a nodes two subtrees

// finds the maximal depth starting at a given node recursively
const maxDepth = (node, depth) => {
    if (node ==  null) {
        return depth;
    } else {
        let maxLeft = maxDepth(node.left, depth + 1);
        let maxRight = maxDepth(node.right, depth + 1);
        return maxLeft > maxRight ? maxLeft : maxRight;
    }
};

// checks if a node is balanced recursively
const checkBalanced = node => {
    if (node == null) {
        return true;
    }
    
    let heightLeft = maxDepth(node.left, 0);
    let heightRight = maxDepth(node.right, 0);
    
    if (Math.abs(heightLeft - heightRight) <= 1) {
        return checkBalanced(node.left) && checkBalanced(node.right);
    } else {
        return false;
    }
};

const isBalanced = root => {
    return checkBalanced(root);
}
