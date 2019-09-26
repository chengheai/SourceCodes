function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
let arr = [1, 2, 3, 4]
console.log(remove(arr, 4))
console.log(arr) // 1 2 3
