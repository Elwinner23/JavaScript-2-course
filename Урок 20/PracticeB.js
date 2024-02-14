let fruits = ["banana", "apple", "orange"];
for(let fruit of fruits)
{
    console.log(fruit.toUpperCase());
}
fruits.push("Kiwi")
if (fruits.length > 4)
    console.log("Массив слишком длинный")
else console.log("Массив подходит по длине")