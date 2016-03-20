var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.hiIndex = 0;
  queue.loIndex = 0;
  queue.storage = {};
  queue.count = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.storage[this.loIndex]) {
    this.storage[this.loIndex+1] = this.storage[this.loIndex];
    this.storage[this.loIndex] = value;
  } else {
    this.storage[this.loIndex] = value;
  }
  this.count++;
  this.hiIndex++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    var deletedVal = this.storage[this.hiIndex-1];
    delete this.storage[this.hiIndex];
    this.count--;
    this.hiIndex--;
    return deletedVal;
  }
};

queueMethods.size = function() {
  return this.count;
};
