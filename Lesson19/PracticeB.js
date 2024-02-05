let num = Math.floor(Math.random() * 101) + 1
let userNum = Number(prompt("Попробуй угадать число от 1 до 100"))
if (userNum > num)
{
  console.log("Не угадали, загаданное число меньше")
}
else if (userNum == num)
{
  console.log("Поздравляю, вы угадали!")
}
else if(userNum < num)
{
  console.log("Не угадали, загаданное число больше")
} 