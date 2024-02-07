const randomNumber = Math.floor(Math.random() * 100) + 1;

let p = 0;

function getUserNumber() {
  let input = prompt("Введите число от 1 до 100");
  let userNumber = parseInt(input);
  return userNumber;
}

let userGuessed = false;

while (!userGuessed) {
  const userNumber = getUserNumber();
  p++;

  if (userNumber === randomNumber) {
    userGuessed = true;
    alert(`Поздравляю, вы угадали число за ${p} попыток!`);
  } else if (userNumber > randomNumber) {
    alert("Меньше");
  } else if (userNumber < randomNumber) {
    alert("Больше");
  }
}