let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = parseInt(prompt("Попробуйте угадать случайное число от 1 до 100 (У вас одна попытка):"));
if (userGuess === randomNumber) {
    alert('Поздравляем, вы угадали!');
} else {
    let hint = userGuess < randomNumber ? "Больше" : "Меньше";
    alert('К сожалению, вы не угадали.');
}
