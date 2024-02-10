let fruits = ["Яблоко", "Банан", "Юра"];

for (let i = 0; i < fruits.length; i++) {
    let element = fruits[i];
    console.log(element.toUpperCase());
}
fruits.push("Киви");

let max_len = 10
if (max_len < fruits.length){
    console.log("Массив слишком длинный");
} else {
    console.log("Массив подходит по длине");
}

