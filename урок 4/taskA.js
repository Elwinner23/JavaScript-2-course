let numbers = [1, 7, 3, 5, 8];

for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}

let sum = 0;
let ind = 0;
while (ind < numbers.length) {
sum += numbers[ind];
ind++;
}

console.log('Сумма всех элементов массива: ' + sum);