let numbers = [125, 130, 135, 140];
for (let number of numbers) {
  console.log(number);
}

let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum = sum + numbers[i];
  i++;
}

console.log(sum);