function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let number = getRandomIntInclusive(1, 100); let live = 0; let r = false;
  let otg;
  while (r == false){
    otg = Number(prompt('Отгадайте число от 1 до 100'));
    if (otg > number){
      alert('Число меньше');
      live ++;
    }else if (otg < number){
      alert('Число больше');
      live ++;
    }else if (otg == number){
      r = true;
    }
  }
  alert(r ? `Вы выиграли! Количество попыток: ${live}.` : '');