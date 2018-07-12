describe('TreeSort', function() {

  it('should be correct, that is, matching Array\'s native sort()', function() {
    var theArray = [2,4,6,9,2,4];

    // Array sorted natively; remove additional properties.
    var sortedArray = Object.values(theArray.sort());

    expect(theArray.treeSort()).toEqual(sortedArray);
    console.log('Tree Sort cost:', theArray.cost);
  })

});
