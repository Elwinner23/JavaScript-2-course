let a;
let b;
let x;
let result;

while (true) {
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

  if (!confirm("Если хотите продолжить нажмите 'ок'. Если желаете выйти, нажмите 'отмена'")) {
    break;
  }
}