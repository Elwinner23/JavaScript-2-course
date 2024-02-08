let secretNumber;
let hp = 3;

function game() {
  let number = document.getElementById("number").value;

  if (!secretNumber) {
    secretNumber = Math.floor(Math.random() * 10) + 1;
  }

  if (hp === 0) {
    alert("Вы проиграли!");
    return;
  }

  if (number == secretNumber) {
    alert('Вы угадали');

  } else if (secretNumber > number) {
    alert('Число больше')
    hp -= 1;

  } else if (secretNumber < number) {
    alert("Число меньше")
    hp -= 1;
  }
}