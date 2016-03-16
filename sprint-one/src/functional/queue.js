var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var indexLength = hiIndex-lowIndex;
  var hiIndex = 0;
  var lowIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    if (storage[lowIndex]) {
      storage[lowIndex+1] = storage[lowIndex];
      storage[lowIndex] = value;
    } else {
      storage[lowIndex] = value;
    }
    count++;
    hiIndex++;
  };

  someInstance.dequeue = function(){
    if (count > 0) {
      var deletedVal = storage[hiIndex-1];
      console.log(deletedVal)
      console.log('hiIndex is:', hiIndex)
      delete storage[hiIndex];
      count--;
      hiIndex--;
      return deletedVal;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
