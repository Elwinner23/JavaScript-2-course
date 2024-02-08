let fruits = ["яблоко", "банан", "апельсин"];

for (let fruit of fruits) {
console.log(fruit.toUpperCase());
}

fruits.push("груша");
console.log(fruits)

if (fruits.length > 3) {
console.log("Массив слишком длинный");
} else {
console.log("Массив подходит по длине");
}