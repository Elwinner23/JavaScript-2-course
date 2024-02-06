let n1 = parseFloat(prompt("Введите первое число:"));
let n2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /, **, %):");
let result;
switch(operator){
    case "+":
        result = n1 + n2;
        break;
    case "-":
        result = n1 - n2;
        break;
    case "*":
        result = n1 * n2;
        break;
    case "/":
        result = n2 !== 0 ? n1 / n2 : "Деление на ноль!";
        break;
    case "**":
        result = Math.pow(n1, n2);
        break;
    case "%":
        result = n2 !== 0 ? n1 % n2 : "Деление на ноль!";
        break;
    default:
        result = "Неверный оператор";
}
console.log(result);