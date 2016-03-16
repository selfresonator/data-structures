var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    // console.log('count outside while', count)
    while (count > 0) {
      // console.log('count inside while',count)
      var deletedVal = storage[count-1];
      delete storage[count];
      // console.log('deleted val:', deletedVal);
      count--;
      return deletedVal;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
