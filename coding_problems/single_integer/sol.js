const assert = require('assert');

function find_single(A) {
  return A.reduce(function(acc, val) { return acc ^ val }, 0);
}

assert.equal(find_single([1, 4, 5, 1, 9, 8, 9, 8, 4]), 5);
assert.equal(find_single([100, 44, 58,  901, 58, 44, 901]), 100);
assert.equal(find_single([1, 4, 1]), 4);
assert.equal(find_single([4]), 4);
