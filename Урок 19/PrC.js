function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
  }
  
var n = getRandomNumber(1, 100)
var k = 0;

for (let i = 0; i < 3; i++) {
    var n1 = prompt("Попробуйте угадать число", "");

    if (n1 == n){
    alert("Вы угадали!");
    break;
    } else if (n1 > n) {
    alert("Ваше число больше");
    } else if (n1 < n) {
    alert("Ваше число меньше");
    } else {
    alert("Вы ввели неверный формат числа");
    }
}