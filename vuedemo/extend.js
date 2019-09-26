function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}
console.log(toObject([{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }])) // { a: 5, b: 6 }
console.log(toObject([1, 2, 3])) // {}
