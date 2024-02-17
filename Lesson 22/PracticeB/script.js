let squareCount = 0

let listSquares = document.getElementById("listSquares")

let button = document.querySelector("button");

button.addEventListener("click", (event)=>{
  squareCount++;
  let square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = `rgb(${Math.trunc(Math.random() * 255 + 1)}, ${Math.trunc(Math.random() * 255 + 1)}, ${Math.trunc(Math.random() * 255 + 1)})`
  square.setAttribute("id", `${squareCount}`)
  listSquares.appendChild(square);
  console.log(listSquares);
})

document.addEventListener('click',e =>{
  if (e.target.classList["0"] == "square"){
    listSquares.removeChild(e.target);
  }
  console.log(listSquares);
})

