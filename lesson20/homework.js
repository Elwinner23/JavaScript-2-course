let x;
let vvod;
let poputki;

x = Math.floor(Math.random() * 100) + 1; 
poputki = 0; 


while (vvod !== x) {
  vvod = Number(prompt("Попробуйте угадать число от 1 до 100."));
  poputki++;
  if (vvod === x) {
    alert(`Поздравляем! Вы угадали число ${x}. Число попыток: ${poputki}`);
    break;
  }
  else if (vvod > x) {
    alert("Загаданное число меньше.");
  }
  else {
    alert("Загаданное число больше.");
  }
}
