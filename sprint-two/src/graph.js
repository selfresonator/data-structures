

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  //Graph.prototype.constructor = Graph;
  this.nodes = [];
  this.edge = {};
  this.key = 0;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push(node)
  // console.log(this.nodes)
  return this.nodes;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  // console.log(this.nodes)
  var found = false
  _.each(this.nodes, function(item, index, collection){
    if(item === node){
      found = true;
    }
  });
  return found
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  // console.log(node)
  // console.log(this.nodes)
  var deletedVal;
  _.each(this.nodes, function(item, index, collection){
    if(item === node){
      deletedVal = item
      collection.pop(item);
    }
  });
  return deletedVal;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected. Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){ 
  var found = false;
  if (fromNode !== toNode) {
    _.each(this.edge, function(edgeArr, index, collection) {
      // console.log(edgeArr);
      _.each(edgeArr, function(item, index, collection) {
        if (collection[0] === fromNode && collection[1] === toNode) {
          found = true;
        } else if (collection[0] === toNode && collection[1] === fromNode){
          found = true;
        }
      });
    });
  }
  return found;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  // console.log('fromnode, tonode', fromNode, toNode)
  if(fromNode !== toNode){
    this.edge[this.key]=[fromNode, toNode];
    this.key++
  }
  // console.log('this.edge after assign', this.edge)
  return this.edge;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var deleteEdge = [];
  _.each(this.edge, function(edgeArr, index, collection) {
    _.each(edgeArr, function(item, index, collection) {
        if (collection[0] === fromNode && collection[1] === toNode) {
          deleteEdge.push(item);
        } else if (collection[0] === toNode && collection[1] === fromNode){
          deleteEdge.push(item);
        } 
        // console.log(edgeArr)
    });
    delete collection[index];
  });
  return deleteEdge;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  // console.log(cb);
  var results = [];
  _.each(this.nodes, function(node, index, collection) {
    results.push(node);
  });
  _.each(results, function(node, index, collection) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// 



