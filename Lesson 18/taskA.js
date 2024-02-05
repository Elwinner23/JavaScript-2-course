alert("Добро пожаловать в меню калькулятора!!!")

let num1 = prompt("Введите первое число: ")
let num2 = prompt("Введите второе число: ")
let operator = prompt("Введите оператор, который хотите использовать: ")

let answer = eval(num1+operator+num2)

alert("Результат = " + answer)
