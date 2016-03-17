var Tree = function(value){
  var newTree = {};
  console.log("inside Tree",value);
  newTree.value = value;
  // storage holding nodes
  newTree.node = {};
  _.extend(newTree,treeMethods);
  newTree.children = [];
  console.log(newTree.children)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  console.log('inside tree.addchild', value)
  this.children[0] = value
};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
