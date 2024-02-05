let a = Number(prompt("Введите число a"))
let b = Number(prompt("Введите число b"))
let sign = prompt("Введите знак (+, -, *, /)")
let result
switch(sign)
{
  case "+":
    result = a + b
    break
   case "-":
    result = a - b
    break
   case "*":
    result = a * b
    break
   case "/":
    result = a / b
    break
  default:
    console.log("Что-то пошло не так")
}
console.log(result)