var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    this._storage.set(i, [[key,value]]);
  } else if (_.contains(bucket, key)) {
    _.each(bucket, function(tuple) {
      if (tuple[0] === key) {
        tuple[1] = value;
      }
    });
  } else {
    bucket.push([key,value]);
  }
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  var result;
  _.each(bucket, function(tuple) {
    if (tuple[0] === key) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(tuple) {
    if (tuple[0] === key) {
      tuple[1] = null;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
