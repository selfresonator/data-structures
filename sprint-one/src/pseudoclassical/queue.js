var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  Queue.prototype.constructor = Queue;

  this.loIndex = 0;
  this.hiIndex = 0;
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  if (this.storage[this.loIndex]) {
    this.storage[this.loIndex+1] = this.storage[this.loIndex];
    this.storage[this.loIndex] = value;
    this.hiIndex++;
    this.count++;
  } else {
    this.storage[this.loIndex] = value;
    this.hiIndex++;
    this.count++;
  }
};

Queue.prototype.dequeue = function(){
  if (this.count > 0) {
    var deletedVal = this.storage[this.hiIndex-1];
    delete this.storage[this.hiIndex];
    this.hiIndex--;
    this.count--;
    return deletedVal;
  }
};

Queue.prototype.size = function(){
  return this.count;
};

var queue = new Queue();
