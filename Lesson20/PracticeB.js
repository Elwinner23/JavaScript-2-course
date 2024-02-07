let fruits = ["orange", "pear", "pineapple", "apple"]

for (let fruit of fruits)
{
  	console.log(fruit.toUpperCase())
}

fruits.push("watermelon")
console.log(fruits)

let normalLength = 5
if (fruits.length == normalLength)
{
  console.log("Массив подходит о длине")
}
else if (fruits.length < normalLength)
{
  console.log("Массив меньше нужной длины")
}
if (fruits.length > normalLength)
{
  console.log("Массив больше нужной длины")
}