function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
  }
  
var n = getRandomNumber(1, 100)
var n1 = prompt("Попробуйте угадать число", "");

if (n1 == n){
alert("Вы угадали!");
} else if (n1 > n) {
alert("Ваше число больше");
} else if (n1 < n) {
alert("Ваше число меньше");
} else {
alert("Вы ввели неверный формат числа");
}