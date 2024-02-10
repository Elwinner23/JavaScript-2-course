let a = prompt('Введите число 1')
a = Number(a)
let b = prompt('Введите оператор (+, -, *, /')
let c = prompt('Введите число 2')
c = Number(c)

switch (b) {
    case '+':
        alert(a + c);
        break;
    case '-':
        alert (a - c);
        break;
    case '*':
        alert(a * c);
        break;
    case '/':
        alert(a / c);
}



let a = prompt('Введите число');
a = +a;
let b = Math.floor(Math.random() * 101);

if (a == b) {
  alert('Ты угадал!');
}
else {
  alert ('Ты не угадал(');
}



let a = prompt('Введите число 1');
a = +a;
let c = prompt('Введите число 2');
c = +c;
let d = prompt('Введите число 3');
d = +d;
let b = Math.floor(Math.random() * 101);

if (a == b) {
  alert('Ты угадал!');
}
else if (c == b) {
  alert('Ты угадал!');
}
else if (d == b) {
  alert('Ты угадал!');
}
else {
  alert ('Ты не угадал(');
}