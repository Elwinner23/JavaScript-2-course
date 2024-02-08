let numbers = [1,22,3,4,5,3]
for(let number of numbers){
  console.log(number);
}

let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log("Сумма элементов массива: " + sum);