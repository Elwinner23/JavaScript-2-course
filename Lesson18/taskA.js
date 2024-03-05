alert("Добро пожаловать в меню калькулятора!!!");

let flag = true;

while (flag) {
    let num1 = prompt("Введите первое число: ");
    let num2 = prompt("Введите второе число: ");
    let operator = prompt("Введите оператор, который хотите использовать: ");

    let answer = eval(num1 + operator + num2);

    alert("Результат = " + answer);


    let isContinue = prompt("Хотите ли вы продолжить?\nВведите 'да' или 'нет'");

    if (isContinue.length === 3)
    {
        flag = false
    }
}

alert("До свидания, спасибо за использование калькулятора!!!")
