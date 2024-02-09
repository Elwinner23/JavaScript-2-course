let num1 = Number(prompt("Введите первое число"))
let num2 = Number(prompt("Введите второе число"))
let operator = prompt("Введите оператор, который хотите использовать")

switch(operator) {
  case "+":
    alert(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  
  case "-":
    alert(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  
  case "*":
    alert(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  
  case "/":
    alert(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  
  case "**":
    alert(`${num1} ** ${num2} = ${num1 ** num2}`);
    break;
  
  case "%":
    alert(`${num1} % ${num2} = ${num1 % num2}`);
    break;
  
  default:
    console.log("Вы ошиблись.....");
}


