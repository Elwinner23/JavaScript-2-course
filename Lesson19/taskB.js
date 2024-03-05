function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

alert("Добро пожаловать, ");

let num = getRandomIntInclusive(1, 100);

for (let i = 10; i > 0; i--) {
  let answer = prompt("Введите загаданное число: ");
  if (answer == num) {
    alert("Вы победили!!!\nСпасибо за игру!!!");
    break;
  } else if (answer == "stop") {
    alert("Спасибо за игру!!!\nДо свидания!!!");
    break;
  } else {
    answer > num
      ? alert(`${answer} больше загаданного числа\nКоличество попыток = ${i}`)
      : alert(`${answer} меньше загаданного числа\nКоличество попыток = ${i}`);
  }
}
