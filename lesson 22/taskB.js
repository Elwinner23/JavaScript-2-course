document.getElementById('CreateSquare').addEventListener('click', function() {
    
    let Square = document.getElementById("Square");
    Square.innerHTML += '<div class="NewSquare"></div>';
    let NewSquares = Square.getElementsByClassName('NewSquare');
  
  
   let NewSquare = Square.lastChild;
   NewSquare.style.background =  getRandomColor();
   NewSquare.style.width = '100px';
   NewSquare.style.height = '100px';
   NewSquare.style.margin = '10px';
   NewSquare.style.display = 'inline-block';
  
  
    for (let NewSquare of NewSquares) {
        NewSquare.addEventListener('click', function() {
        this.remove();
        });
    }
});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
