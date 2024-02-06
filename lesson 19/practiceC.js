let x;
let vvod;
let poputki;

x = Math.floor(Math.random() * 100) + 1; 
poputki = 3; 


while (poputki > 0) {
    vvod = Number(prompt("Попробуйде угадать число от 1 до 100. У вас " + poputki + " попыток."));
    
if (vvod === x) {
  alert("Поздравляем! Вы угадали число.");
  break;
}
  else if (vvod > x) {
    alert("Загаданное число меньше.");
}
  else {
    alert("Загаданное число больше.");
  }
  poputki--;
}

if (poputki === 0) {
alert("У вас закончились попытки. Вы не угадали число: " + x);
}