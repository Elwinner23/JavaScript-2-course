let fruits = ['киви', 'апельсин', 'яблоко', 'груша']
for (let fruit of fruits) {
  console.log(fruit);
}
fruits.push('банан');
console.log(fruits);
console.log(fruits.length);

if (fruits.length >= 5) {
  console.log('Массив слишком длинный');
}
else {
  console.log('Массив подходит по длине');
}