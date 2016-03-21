var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
  return this.value;
};

treeMethods.contains = function(target){
  var found = false;

  var searchNode = function(nodeList, target){
    nodeList = nodeList || this.children;

    if (nodeList.length === 0) {
      return;
    }

    for(var i = 0; i < nodeList.length; i++) {
      var childNode = nodeList[i];
      if(childNode.value === target) {
        found = true;
        return;
      } else {
        searchNode(childNode.children, target);
      }
    }
  };
  searchNode(this.children, target);

  return found;
};
