let container = document.getElementById('container');
let addSquareBtn = document.getElementById('addSquareBtn');

addSquareBtn.addEventListener('click', () => {
let square = document.createElement('div');
square.classList.add('square');
square.style.backgroundColor = getRandomColor();
container.appendChild(square);

square.addEventListener('click', () => {
container.removeChild(square);
});
});

function getRandomColor() {
let letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}