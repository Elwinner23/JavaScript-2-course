let x;
let vvod;

x= Math.floor(Math.random() * 100) + 1;
vvod = prompt("Угадайте число от 1 до 100.");

if (vvod === x) {
  alert("Поздравляем! Вы угадали число.");
} else if (vvod > x) {
  alert("Загаданное число меньше. Вы не угадали число: "+ x);
} else {
  alert("Загаданное число больше.Вы не угадали число: "+ x);
}