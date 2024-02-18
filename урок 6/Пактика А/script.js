let container = document.getElementById('container');
let count = 1;

function addSquare() {
let square = document.createElement('div');
square.classList.add('square');
square.style.top = Math.random() * (100 - 50) + 'vh';
square.style.left = Math.random() * (100 - 50) + 'vw';
square.innerText = count;
container.appendChild(square);
count++;
}