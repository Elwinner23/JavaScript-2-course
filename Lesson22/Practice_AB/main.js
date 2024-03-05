function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

// создание нового квадрата
let squareCreator = document.querySelector("#squareCreator");
squareCreator.addEventListener("click", (x) => {
  let squareContainer = document.querySelector("#squareContainer");
  let redSquare = document.createElement("div");

  redSquare.style.backgroundColor = getRandomColor();
  redSquare.style.width = "100px";
  redSquare.style.height = "100px";
  redSquare.style.margin = "10px";
  squareContainer.appendChild(redSquare);

  redSquare.addEventListener('click', () => {redSquare.remove()})
});


