const numbers = [33, 25, 1, 5,9];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let i = 0;
let summ = 0;
while (i < numbers.length){
    summ += numbers[i];
    i++;
}
console.log(summ)
