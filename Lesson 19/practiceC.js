let n = Math.trunc(Math.random() * 101);
confirm('Хотите сыграть в игру?')
let cnt = 0;
let p = Number(prompt('Попробуй угадать число от 1 до 100, у тебя есть 3 попытки. Введите число'))
if (n == p){
  alert('Молодец! ты угадал!')
}else if (n != p && p>n && cnt < 4){
  cnt ++
  p = Number(prompt('Попробуй еще раз! Подсказка: загаданное число меньше'))
}else if (n != p && p<n && cnt < 4){
  cnt ++
  p = Number(prompt('Попробуй еще раз! Подсказка: загаданное число больше'))
}else if (cnt >= 4){ 
  alert('Упс! У тебя закончились попытки, попробуй начать игру заново')
}