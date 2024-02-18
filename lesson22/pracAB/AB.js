let button = document.getElementById('create')

button.addEventListener('click', (event) =>{
    let square = document.createElement("div");
    square.classList.add("square");
    let prg = document.getElementById('sq')
    prg.appendChild(square);
    square.style.backgroundColor = 'red';
})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


let button2 = document.getElementById('create_color')
button2.addEventListener('click', (event) =>{
    let square = document.createElement("div");
    square.classList.add("square");
    let prg = document.getElementById('color_sq')
    prg.appendChild(square);
    square.style.backgroundColor = getRandomColor()

    let squares = prg.getElementsByClassName('square');

    for (let square of squares) {
        square.addEventListener('click', function() {
        this.remove();
        });
    }
})


