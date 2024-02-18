let button = document.getElementById('create')

button.addEventListener('click', (event) =>{
    let square = document.createElement("div");
    square.classList.add("square");
    let prg = document.getElementById('sq')
    prg.appendChild(square);
    console.log(square);
})