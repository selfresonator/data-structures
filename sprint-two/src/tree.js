var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // newTree.childnode = {};
  // newTree.parentnode = {};
  // storage holding nodes
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  console.log(child);
  this.children.push(child);
  return this.value;
};

treeMethods.contains = function(target){
  var found = false;
  _.each(this.children, function(item, index, collection) {
    _.each(item, function(val, key, collection) {
      target === val ? found = true : found = false;
    });
  });
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
