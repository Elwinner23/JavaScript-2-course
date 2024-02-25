document.getElementById('CreateSquare').addEventListener('click', function() {
    let Square = document.getElementById("Square");
    Square.innerHTML += '<div class="NewSquare"></div>';



 let NewSquares = document.getElementsByClassName('NewSquare');
 for (let NewSquare of NewSquares){
 NewSquare.style.background = 'red';
 NewSquare.style.width = '100px';
 NewSquare.style.height = '100px';
 NewSquare.style.margin = '10px';
 NewSquare.style.display = 'inline-block';
}
 

});