while (true) {
    let operand1 = parseFloat(prompt("Введите первое число:"));
    let operator = prompt("Введите оператор (+, -, *, /):");
    let operand2 = parseFloat(prompt("Введите второе число:"));
    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                result = 'Ошибка: деление на ноль';
            }
            break;
        default:
            result = 'Ошибка: неверный оператор';
    }

    console.log('Результат: ' + result);

    let exit = confirm('Хотите ли выйти?');
    if (exit) {
        break;
    }
}