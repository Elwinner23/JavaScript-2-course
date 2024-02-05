let a = Number(prompt('Введите первое число:'));
let b = Number(prompt('Введите второе число:'));
let o = prompt('Введите оператор для двух чисел (+ - * / ** %) :');
let p;
switch(o){
  case '+':
    p = a + b
    break;
  case '-':
    p = a - b
    break;
  case '*':
    p = a * b
    break;
  case '/':
    p = a / b
    break;
  case '**':
    p = a ** b
    break;
  case '%':
    p = a % b
    break;
  default:
    console.log('ошибка оператора начните заново')
}
console.log(a + o + b + '=' + p)