var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
  console.log(this._storage)

};

setPrototype.contains = function(item){
  if (_.contains(this._storage, item)) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  this._storage.pop(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
