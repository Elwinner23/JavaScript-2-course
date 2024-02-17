let squareCount = 0

let listSquares = document.getElementById("listSquares")

let button = document.querySelector("button");

button.addEventListener("click", (event)=>{
  squareCount++;
  let square = document.createElement("div");
  square.classList.add("square");
  listSquares.appendChild(square);
  console.log(listSquares);
})
