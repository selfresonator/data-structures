var BinarySearchTree = function(value){
  // functionally shared instantiation pattern:
  var newTree = {};
  newTree.left = undefined;
  newTree.right = undefined;
  newTree.value = value;
  _.extend(newTree, binaryTreeMethods);
  console.log('newTree: ', newTree);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  // so check left and check right. set an instance of BinarySearchTree
  // the either prop, depending on the value.
  // console.log('value: ', val);
  console.log('this.right: ', this.value)
  if (val > this.value) {
    console.log('value in first if: ', val);
    if (this.right !== undefined) {
      this.right.insert(val);
    } else {
      this.right = new BinarySearchTree(val);
    }
  } else if (val < this.value) {
    console.log('value in else: ', val);
    if (this.value !== undefined) {
      this.left.insert(val);
    } else {
      this.left =  new BinarySearchTree(val);
    }
  }
};

binaryTreeMethods.contains = function(value) {

};

binaryTreeMethods.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
