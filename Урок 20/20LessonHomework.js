var x = Math.floor(Math.random() * 101);
var count = 0;
if (x > 100 || x < 1) {
	alert("Введите число от 1 до 100")
} else {
	var y = prompt("Угадайте число");
	while (y < x) {
		var y = prompt("Загаданное число больше")
		count = count + 1;
	}
	while (y > x) {
		var y = prompt("Загаданное число меньше")
		count = count + 1;
	}
	if (x == y) {
      alert("Верно! Вы отгадали число")
    }
	alert("Попыток: " + count)
}