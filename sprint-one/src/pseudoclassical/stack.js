var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  Stack.prototype.contructor = Stack;
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    var deletedVal = this.storage[this.count-1];
    delete this.storage[this.count];
    this.count--;
    return deletedVal;
  }
};

Stack.prototype.size = function() {
  return this.count;
};
