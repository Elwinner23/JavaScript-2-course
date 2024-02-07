let numbers = [3, 435, 654, 2, 43]


for (let num in numbers)
{
  console.log(numbers[num])
}


let sum = 0
let iter = 0

while (iter < numbers.length)
{
  sum += numbers[iter]
  iter++
}
console.log(sum)