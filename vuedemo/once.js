function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}
function f1() {
  console.log(123)
}
console.log(once(f1))
console.log(once(f1))
