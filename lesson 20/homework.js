let a;
let input;
let attempt;

a = Math.floor(Math.random() * 100) + 1;
attempt = 0;

while(input !== a) {
  input = Number(prompt("Угадай число от 1 до 100"));
  attempt++;

  if (input === a) {
    alert(`Легенда! Ты угадал число ${a}. Тебе понадобилось всего ${attempt} попыток`);
    break;
  }

  else if (input > a) {
    alert("Убавь пыл! Загаданное число меньше!");
  }

  else {
    alert("Давай газуй! Загаданное число больше!");
  }
}
