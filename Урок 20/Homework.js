function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let a = getRandomInt(100) + 1;
let b = 0;
let i = 1;
while(b != a)
{
    b = prompt("Попробуйте отгадать число от 1 до 100");
    if (b == a)
    {
    alert(`Вы угадали число ${a} за ${i} попытки`);
    } else
    {
    i++;
    if (a > b)
        alert("Загаданное число больше");
    else
        alert("Загаданное число меньше");
    }
}