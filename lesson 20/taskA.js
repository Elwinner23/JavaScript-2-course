let numbers = ['12', '42', '228', '322']
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};

let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(sum);