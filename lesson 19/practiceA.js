let a;
let b;
let x;
let result;

a = Number(prompt("Введите первое число:"));
x= prompt("Введите математический знак:");
b = Number(prompt("Введите второе число:"));

  switch(x) {
    case '+':
      result = a + b;
      console.log("=" + result)
      break;
    case '-':
      result = a - b;
      console.log("=" + result);
      break;
    case '*':
      result = a * b;
      console.log("=" + result);
      break;
    case '/':
      result = a / b;
      console.log("=" + result);
      break;
    case '^':
      result = a ** b;
      console.log("=" + result);
      break;
    case '%':
      result = a % b;
      console.log("=" + result);
      break;
    default:
      result = 'Неверно введен оператор';
      console.log(result);
      break
  }