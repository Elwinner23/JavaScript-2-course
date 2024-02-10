function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let number = getRandomIntInclusive(1, 100); let live = 3; let r = false;
  let otg;
  while (live > 0){
    otg = Number(prompt('Отгадайте число от 1 до 100'));
    if (otg > number){
      alert('Число меньше');
      live -= 1;
    }else if (otg < number){
      alert('Число больше');
      live -= 1;
    }else if (otg == number){
      r = true;
      live = 0;
    }
  }
  alert(r ? 'Вы выиграли!' : 'Вы проиграли!');