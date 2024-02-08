let fruits = ['яблоко', 'банан', 'апельсин']

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}


fruits.push("киви");


if (fruits.length > 2) {
  console.log("Массив слишком длинный");
} else {
  console.log("Массив подходит по длине");
}