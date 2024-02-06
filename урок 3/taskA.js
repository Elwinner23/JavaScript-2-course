function playGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let tries = 3;
    
    while (tries > 0) {
    const userGuess = parseInt(prompt("Угадай число от 1 до 100:"));
    
    if (userGuess === secretNumber) {
    alert("Правильно! Ты угадал число!");
    return;
    } else if (userGuess < secretNumber) {
    alert("Нет, это число больше!");
    } else {
    alert("Нет, это число меньше!");
    }
    
    tries--;
    }
    
    alert("К сожалению, ты не угадал число. Попробуй в следующий раз!");
    }
    
    playGame();