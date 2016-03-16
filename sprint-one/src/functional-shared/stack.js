var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  while(this.count > 0) {
    var deletedVal = this.storage[this.count-1];
    delete this.storage[this.count];
    this.count--;
    return deletedVal;
  }
};

stackMethods.size = function() {
  return this.count;
};
