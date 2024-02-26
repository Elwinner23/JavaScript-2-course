function filt(arr) {
    return arr.filter(num => num > 0);
}
const array = [1, -2, 3, -4, 5];
const arr = filt(array);
console.log(arr)