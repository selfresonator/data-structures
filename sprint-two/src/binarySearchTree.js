var BinarySearchTree = function(value){
  // prototypal instantiation pattern:
  var newTree = Object.create(BinarySearchTree.prototype);
  this.left;
  this.right;
  this.value;
  return newTree;
};


BinarySearchTree.prototype.insert = function(val) {
  // so check left and check right. set an instance of BinarySearchTree
  // the either prop, depending on the value.
  if(val > this.value){
        if(this.right !== undefined){
          this.right.insert(val);
        } else {
        this.right = new BinarySearchTree(val);
        }
      } else if(val < this.value){
        if(this.left !== undefined){
          this.left.insert(val)
        } else {
        this.left = new BinarySearchTree(val);
        }
      }};
BinarySearchTree.prototype.contains = function(value) {

};
BinarySearchTree.prototype.depthFirstLog = function(value) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
