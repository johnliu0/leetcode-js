/*
 * Submission date: March 20, 2019
 * Runtime: 96ms
 * Faster than: 84.79%
 * Memory Usage: 39.7MB
 * Less than: 100.00%
 */

// this recursive method merges node2 into node1
// therefore no additional memory is required to merge
const merge = (node1, node2) => {
    node1.val += node2.val;
    
    if (node2.left != null) {
        if (node1.left == null) {
             node1.left = node2.left;
        } else {
            merge(node1.left, node2.left);
        }
    }
    
    if (node2.right != null) {
        if (node1.right == null) {
            node1.right = node2.right;
        } else {
            merge(node1.right, node2.right);
        }
    }
}

const mergeTrees = (t1, t2) => {
    if (t1 != null && t2 != null) {
        merge(t1, t2);
        return t1;
    } else if (t1 != null) {
        return t1;
    } else if (t2 != null) {
        return t2;
    } else {
        return null;
    }
};
