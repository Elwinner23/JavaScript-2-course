let runNum = Math.trunc(Math.random() * 100 + 1)
let userNum = prompt("Введите число от 1 до 100")
let attemps = 1

while (userNum != runNum)
{
  if (userNum > runNum)
  {
    alert("Ваше число больше")
    let userNum = prompt("Введите число от 1 до 100")
    attemps++
  }
  else if (userNum < runNum)
  {
    alert("Ваше число меньше")
    let userNum = prompt("Введите число от 1 до 100")
    attemps++
  }
}

alert(`Поздравляю, вы угадали число! Кольчество попыток: ${attemps}`)