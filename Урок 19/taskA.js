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
        alert(a - c);
        break;
    case '*':
        alert(a * c);
        break;
    case '/':
        alert(a / c);
        break;
    default:
        alert('Вы ввели что-то неправильно(');
}



