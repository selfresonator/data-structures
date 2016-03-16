var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var storageLength = 1;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[storageLength] = value;
    count++;
    storageLength++;
  };

  someInstance.dequeue = function(){
    if (count > 0) {
      count--;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
