let randomNumber = Math.floor(Math.random() * 100) + 1;

let p = 3;
let correctGuess = false;

while (p > 0) {
  let userGuess = Number(prompt("Угадайте число от 1 до 100, у вас 3 попытки!"));

  if (userGuess === randomNumber) {
    correctGuess = true;
    break;
  } else if (userGuess < randomNumber) {
    alert("Загаданное число больше");
  } else if (userGuess > randomNumber) {
    alert("Загаданное число меньше");
  }

  p--;
}

if (correctGuess) {
  alert("Поздравляем! Вы угадали число!");
} else {
  alert("К сожалению, вы исчерпали все попытки. Загаданное число было " + randomNumber);
}