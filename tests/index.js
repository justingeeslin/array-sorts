// Global variable, cost.
cost = 0

describe('Native Array Sort', function() {
  beforeAll(function() {
    //Reset cost to zero
    cost = 0;
  })

  it('should be correctly sorted', function() {
    var anArray = [2,4,6,9,2,4];
    performance.mark('nativeSort-start');
    var sortedArray = anArray.sort()
    performance.mark('nativeSort-end');

    performance.measure(
      "nativeSort",
      "nativeSort-start",
      "nativeSort-end"
    );

    var measures = performance.getEntriesByName("nativeSort");
    var measure = measures[0];
    console.log('Performance measure of Native sort:', measure.duration );

    expect(sortedArray).toEqual([2,2,4,4,6,9]);

  })
})

describe('TreeSort', function() {

  beforeEach(function () {
    //Reset cost to zero
    cost = 0;
  })

  it('should be correctly sorted, that is, matching Array\'s native sort()', function() {
    var theArray = [2,4,6,9,2,4];

    // Array sorted natively; remove additional properties.
    var sortedArray = Object.values(theArray).sort();

    performance.mark('treeSort-start');
    var treeSorted = theArray.treeSort()
    performance.mark('treeSort-end');

    console.log('Tree Sort cost:', cost);
    expect(treeSorted).toEqual(sortedArray);

    performance.measure(
      "treeSort",
      "treeSort-start",
      "treeSort-end"
    );

    var measures = performance.getEntriesByName("treeSort");
    var measure = measures[0];
    console.log('Performance measure of Tree sort:', measure.duration );
  })

});

describe('Find index of minimum value', function() {

  beforeEach(function () {
    //Reset cost to zero
    cost = 0;
  })

  it('should find the correct minimum value\'s index', function() {
    var theArray = [0,2,3,4,-4];

    expect(theArray.minIndex()).toBe(4);
  });

})

describe('SelectionSort', function() {

  beforeEach(function () {
    //Reset cost to zero
    cost = 0;
  })

  it('should be correctly sorted, that is, matching Array\'s native sort()', function() {
    var theArray = [2,4,6,9,2,4];

    // Array sorted natively; remove additional properties.
    var sortedArray = Object.values(theArray).sort();

    expect(theArray.selectionSort()).toEqual(sortedArray);
    console.log(theArray + ' should be ' + sortedArray);

    console.log('Selection Sort cost:', cost);
  })

  it('should be correctly sorted for Z4 reversed, that is, matching Array\'s native sort()', function() {
    var theArray = [4,3,2,1,0];

    // Array sorted natively; remove additional properties.
    var sortedArray = Object.values(theArray).sort();

    expect(theArray.selectionSort()).toEqual(sortedArray);
    console.log(theArray + ' should be ' + sortedArray);

    console.log('Selection Sort cost:', cost);
  })

});

describe('Merge Sort', function() {

  beforeEach(function () {
    //Reset cost to zero
    cost = 0;
  })

  it('should be correct', function() {
    var theArray = [2,6,5,1,8];

    // Array sorted natively; remove additional properties.
    var sortedArray = Object.values(theArray).sort();
    var sorted = theArray.mergeSort();
    // expect(theArray.quickSort()).toEqual(sortedArray);
    console.log('Sorted', sorted);
    console.log('cost', cost);
    expect(sorted).toEqual(sortedArray);
  })

})

describe('Quick Sort', function() {

  beforeEach(function () {
    //Reset cost to zero
    cost = 0;
  })

  it('should be correct', function() {
    var theArray = [2,6,5,1,8];

    // Array sorted natively; remove additional properties.
    var sortedArray = Object.values(theArray).sort();
    var sorted = theArray.quickSort();
    // expect(theArray.quickSort()).toEqual(sortedArray);
    console.log('Sorted', sorted);
    console.log('cost', cost);
    expect(sorted).toEqual(sortedArray);
  })

})
