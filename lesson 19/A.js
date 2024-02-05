let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /, **, %):");

let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    console.log("Результат сложения: " + result);
    break;
  case '-':
    result = num1 - num2;
    console.log("Результат вычитания: " + result);
    break;
  case '*':
    result = num1 * num2;
    console.log("Результат умножения: " + result);
    break;
  case '/':
    result = num1 / num2;
    console.log("Результат деления: " + result);
    break;
  case '**':
    result = num1 ** num2;
    console.log("Результат возведения в степень: " + result);
    break;
  case '%':
    result = num1 % num2;
    console.log("Остаток от деления: " + result);
    break;
  default:
    console.log("Некорректный оператор");
}