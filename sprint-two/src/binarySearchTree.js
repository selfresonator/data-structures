var BinarySearchTree = function(value){
  // functionally shared instantiation pattern:
  var newTree = Object.create(binaryTreeMethods);
  newTree.left = undefined;
  newTree.right = undefined;
  newTree.value = value;
  // _.extend(newTree, binaryTreeMethods);
  // console.log('newTree: ', newTree);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  if (val === this.value) {
    return;
  } else if (val > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else if (val < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  var found = false;

  var searchTree = function(tree, value) {
    var tree  = tree || this;
    console.log('tree in search tree: ', tree)
    if (tree.value === value) {
      found = true;
      return;
    } else if (value < tree.value) {
      // the left values are smaller. keep seaching if its not found
      searchTree(tree.left);
    } else {
      searchTree(tree.right);
    }
  };

  searchTree(this, value);

  return found
};

binaryTreeMethods.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
