Array.prototype.minIndex = function() {
  var currentMin;
  var currentMinIndex;
  for(var i = 0; i < this.length; i++) {

    if (currentMin === undefined || currentMin > this[i]) {
      currentMin = this[i];
      currentMinIndex = i;
    }

    cost++;
  }

  return currentMinIndex;
}

Array.prototype.selectionSort = function() {

  for(var i = 0; i < this.length; i++) {

    var unsortedPartition = this.slice(i)
    // Min Index of this, adding i so that it is NOT the index of unsortedPartition.
    var minIndex = unsortedPartition.minIndex() + i;
    console.log('From ' + i + ' to the end, ' + unsortedPartition + ' ,' + this[minIndex] + ' is the smallest value. Swap ' + this[i] + ' and ' + this[minIndex] + '.');

    // Swap i and the smallest element; its a way of moving the smallest element to the beginning.
    var temp = this[i];
    this[i] = this[minIndex];
    this[minIndex] = temp;

    cost++;
  }

  return this;
}

Array.prototype.treeSort = function() {
  // Because using `this` can be tricky.
  var self = this;

  // Like a struct for our tree sort alogo.
  function BinaryNode(item) {
    this.item;
    this.leftChild;
    this.rightChild;

    if (typeof item !== "undefined") {
      this.item = item;
    }

    return item;
  }

  // A tree traversing subroutine, finding the right place to insert the new node.
  function placeNode(node, nodeToInsert) {
    // Increment cost by one for each iteration.
    console.log('Placing a node. Cost: 1')
    cost++;
    // If the child is less than (or equal to) the parent ..
    if (node.item >= nodeToInsert.item) {
      // ...insert to the left

      // If the node does not have a left child..
      if (typeof node.leftChild === "undefined") {
        console.log('Assigning ' + nodeToInsert.item + ' as left child to ' + node.item)
        node.leftChild = nodeToInsert;
      }
      else {
        // If it does, "place" node on the left child..
        placeNode(node.leftChild, nodeToInsert)
      }
    }
    else {
      // greather than... insert to the right
      if (typeof node.rightChild === "undefined") {
        node.rightChild = nodeToInsert;
      }
      else {
        placeNode(node.rightChild, nodeToInsert)
      }
    }

  }

  // A binary tree; will be iterated through to make the sorted array.
  var tree;

  for(var i = 0; i < this.length; i++) {
    cost++;
    // Create a new node to insert.
    var aNode = new BinaryNode();
    console.log('Creating a node with value ' + this[i]);
    aNode.item = this[i];

    if (i === 0) {
      // Push onto tree as the root
      tree = aNode;
    }
    else {
      // Find the proper place on the tree to insert the node.
      placeNode(tree, aNode)
    }
  }

  //Traverse the tree transforming back into an array
  var sortedNumbers = [];
  function visitNode(node) {
    cost++
    console.log('Visiting ', node.item);

    // Visit left children because they are less than and push them
    if (typeof node.leftChild !== "undefined") {
      visitNode(node.leftChild);
    }
    // No lesser than children, push yourself
    sortedNumbers.push(node.item);
    // Now on to greater things, push greater subtree.
    if (typeof node.rightChild !== "undefined") {
      visitNode(node.rightChild);
    }

  }
  //Work from the left most children to the right; this should be sorted order.
  visitNode(tree);

  return sortedNumbers;

}

Array.prototype.mergeSort = function() {
  console.log('Sorting:', this);
  cost++;

  if (this.length > 2) {
    // Break it apart

    // Choose a pivot
    var pivotIndex = Math.floor(this.length / 2);
    var pivot = this[pivotIndex];

    var leftSection = this.slice(0, pivotIndex+1);
    var rightSection = this.slice(pivotIndex+1);

    console.log('Left section', leftSection)
    console.log('right section', rightSection)

    leftSection = leftSection.mergeSort();
    rightSection = rightSection.mergeSort();

    console.log('Merging the sections', leftSection, rightSection);
    // Merge
    var mergedArr = []
    while (leftSection.length > 0 || rightSection.length > 0) {
      cost++;
      var l = leftSection.shift();
      var r = rightSection.shift();

      // When one array is longer than the other, use the merged array and make the comparison on these elements
      if (typeof l === "undefined") {
        l = mergedArr.pop();
      }
      if (typeof r === "undefined") {
        //
        r = mergedArr.pop();
      }

      if (l > r) {
        mergedArr.push(r)
        mergedArr.push(l)
      }
      else if (l < r) {
        mergedArr.push(l)
        mergedArr.push(r)
      }
      else {
        if (typeof l !== "undefined") { mergedArr.push(l) }
        if (typeof r !== "undefined") { mergedArr.push(r) }
      }

    }
    console.log('Merge result: ', mergedArr)
    return mergedArr;
  }
  else {
    if (this[0] > this[1]) {
      // Swap
      var temp = this[0];
      this[0] = this[1];
      this[1] = temp;
    }
  }

  return this;


}
