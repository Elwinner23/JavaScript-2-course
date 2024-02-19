let n = Math.floor(Math.random() * 100) + 1;
let cnt = 1
let p = Number(prompt('Попробуй угадать число от 1 до 100. Введите число: '));
while (p != n){
  cnt ++
  if (p > n)
  {
    p = Number(prompt('Ты не угадал,попробуй загадать число ещё раз, но меньше: '))
  }
  else if(p < n)
  {
    p = Number(prompt('Ты не угадал,попробуй загадать число ещё раз, но больше: '))
  }
}
alert('Есс! Ты выиграл за ' + cnt + ' попыток!')