var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(Stack.prototype);
  stack.storage = {};
  stack.count = 0;
  return stack;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  while (this.count > 0) {
    var deletedVal = this.storage[this.count-1];
    delete this.storage[this.count];
    this.count--;
    return deletedVal;
  }
};

Stack.prototype.size = function() {
  return this.count;
};
