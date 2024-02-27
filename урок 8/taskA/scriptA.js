const ar = [1, -2, 3, -4, 5, -6, 7 ,-8, 9, -10]
function fil(ar) {
    return ar.filter(item => item > 0)
}
let filteredArray = fil(ar)
console.log(filteredArray)