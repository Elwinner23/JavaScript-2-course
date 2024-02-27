const arr1 = [1, 2, 3, -3, -7, 8, 9 ,-2, -4, 5]
function filt(array) {
  return array.filter(item => item > 0)
}
filteredArray = filt(arr1)
console.log(filteredArray)