window.addEventListener("DOMContentLoaded", (event) => {
let button = document.querySelector('button');
let rectangles = document.querySelector('.rectangles');
button.addEventListener('click', (event)=>{
    var rectangle = document.createElement('div');
    rectangle.style = "width: 50px; height: 50px; background-color: red; margin: 5px;"
    rectangles.appendChild(rectangle);
})})
