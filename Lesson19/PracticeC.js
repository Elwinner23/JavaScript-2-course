let num = Math.floor(Math.random() * 101) + 1
let userNum = Number(prompt("Попробуй угадать число от 1 до 100"))
while (userNum != num)
{
  if (userNum > num)
  {
    alert("Не угадали, загаданное число меньше")
    userNum = Number(prompt("Попробуй угадать число от 1 до 100"))
  }
  else if(userNum < num)
  {
    alert("Не угадали, загаданное число больше")
    userNum = Number(prompt("Попробуй угадать число от 1 до 100"))
  }
}
alert("Поздравляю, вы угадали!")