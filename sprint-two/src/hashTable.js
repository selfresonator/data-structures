var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._bucket = [];
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var tuple = [key,value];
  console.log('bucket before:', this._bucket);
  if (this._bucket[i]) {
    this._bucket.push(tuple);
    this._storage.set(i, this._bucket);
  }
  console.log('bucket after:', this._bucket);
  this._bucket.push(tuple);
  this._storage.set(i, this._bucket);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var result = this._storage.get(i)[0];
  if (this._storage.get(i)[0] === key) {
    return result;
  }
};

HashTable.prototype.remove = function(key){
// console.log("inside remove", key);
  var i = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(i)[0] === key) {
    this._storage.get(i)[1] = null;
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
