
//1 способ 
const sort = (array) => {
    if (array.length <= 1) {
        return array;
    }

const base = array[0];
const less = array.slice(1).filter(el => el <= base);
const larger = array.slice(1).filter(el => el > base);

return sort(less).concat(base, sort(larger));
}

console.log(sort([31, 12, 104, 5, 777]))

//2 способ
const messy = [12, 74, 15,3];
const  increasing = messy.sort((a,b) => a - b);
console.log(messy);

//3 cпособ
let arr = [132, 5324, 1, 210, 78];
let finaly = arr.sort(function(a,b) {
    if (a < b) return -1;
});
console.log(finaly)