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
  // console.log(child);
  this.children.push(child);
  return this.value;
};

treeMethods.contains = function(target){
  var found = false;
  var nodeToSearch = this.children;
  if (nodeToSearch.length === 0){
    return;
  }

  _.each(nodeToSearch, function(item, index, collection) {
    console.log(item);
    console.log('target inside each', target);
    if (target === item.value){
      console.log(item);
      found = true;
    } else {
      console.log("we in here!!")
      console.log("this is the node's children", item.children);
      item.contains(target);
    }
  });
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
