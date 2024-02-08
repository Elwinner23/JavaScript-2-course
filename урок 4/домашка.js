const num = Math.floor(Math.random() * 100) + 1;
let qua = 0;

while (true) {
const предположение = parseInt(prompt("Угадай число от 1 до 100:"));

qua++;

if (предположение === num) {
alert(`Поздравляю, ты угадал число за ${qua} попыток!`);
break;
} else if (предположение < num) {
alert("Загаданное число больше!");
} else {
alert("Загаданное число меньше!");
}
}