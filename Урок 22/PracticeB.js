function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
window.addEventListener("DOMContentLoaded", (event) => {
let button = document.querySelector('button');
let rectangles = document.querySelector('.rectangles');
button.addEventListener('click', (event)=>{
    let rectangle = document.createElement('div');
    rectangle.style = `width: 50px; height: 50px; background-color: rgb(${getRandomInt(257)}, ${getRandomInt(257)}, ${getRandomInt(257)}); margin: 5px;`
    rectangle.addEventListener('click', function() {
        rectangle.parentNode.removeChild(rectangle);})
    rectangles.appendChild(rectangle);
    
})
})
