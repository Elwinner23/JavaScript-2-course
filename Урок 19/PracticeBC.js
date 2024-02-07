function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let a = getRandomInt(100) + 1;
let b = prompt("Попробуйте отгадать число от 1 до 100");
if (b == a)
{
  alert(`Вы угадали число ${a}`);
} else
{
  if (a > b)
    alert("Загаданное число больше");
  else
    alert("Загаданное число меньше");
  b = prompt("Попробуйте отгадать число от 1 до 100");
  if (b == a)
  {
    alert(`Вы угадали число ${a}`);
  } else
  {
    if (a > b)
      alert("Загаданное число больше");
    else
      alert("Загаданное число меньше");
    b = prompt("Попробуйте отгадать число от 1 до 100");
    if (b == a)
    {
      alert(`Вы угадали число ${a}`);
    } else
    {
      alert(`Вы не отгадали! Было загадано ${a}`)
    }
  }
}
