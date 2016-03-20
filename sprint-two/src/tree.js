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

  var searchNode = function(nodeList, target){
    nodeList = nodeList || this.children


    if(nodeList.length === 0){
      return;
    }

    for(var i = 0; i < nodeList.length; i++){
      var childNode = nodeList[i]
        console.log('children before if', childNode.children)
      if(childNode.value === target){
        found = true;
        console.log(childNode.children)
        return;
      } else {
        console.log('children in recursion', childNode.children)       
        searchNode(childNode.children, target)    
      }
    }
  };
  searchNode(this.children, target);

  return found;
};
  // _.each(nodeToSearch, function(item, index, collection) {
  //   console.log(item);
  //   console.log('target inside each', target);
  //   if (target === item.value){
  //     console.log(item);
  //     found = true;
  //   } else {
  //     console.log("we in here!!")
  //     console.log("this is the node's children", item.children);
  //     item.contains(target);
  //   }
  // });


/*
 * Complexity: What is the time complexity of the above functions?
 */
