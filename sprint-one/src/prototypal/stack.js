var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.count = 0;
  // console.log(stack)
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  while (this.count > 0) {
    var deletedVal = this.storage[this.count-1];
    delete this.storage[this.count];
    this.count--;
    return deletedVal;
  }
};

stackMethods.size = function() {
  return this.count;
};
