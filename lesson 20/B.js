let fruits = ["apple", "pineapple", "orange"];

for (let fruit of fruits) {
    console.log(fruit.toUpperCase());
}

fruits.push("grape");

if (fruits.length > 3) {
    console.log("Массив слишком длинный");
} else {
    console.log("Массив подходит по длине");
}
