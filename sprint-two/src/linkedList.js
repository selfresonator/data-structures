var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node();
    newNode.value = value;
    if (!list.head) {
      list.head = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
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
