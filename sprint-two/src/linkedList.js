var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node();
    newNode.value = value;
    // console.log(value)
    // newNode.value = value;
    // console.log(newNode)
    // check if list has has any nodes
      // if so new node has list.head && list.tail = true;
    // else if currentnode has head and tail, then list.tail = null 
      // the new node added will have list.head = null list.tail = true;
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    // if the list.node has list.head = true, 
    // assign the head node to a variable
    // find list.node.next and put list.
    // when we have the value of the nextnode we reassign nextnodes list.head = true
    // delete the node
    // return deleted
    var currentNode = list.head;
    var nextnode = list.head.next;
    if (list.head) {
      delete list.head;
      list.head = nextnode;
    }
    return currentNode.value;
  };

  list.contains = function(target) {
    var found = false;
      _.each(list, function(item, index, collection) {
        if(item.value === target) {
          found = true;
        }
      });
    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
