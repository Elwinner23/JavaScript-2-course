document.getElementById('CreateCvadrat').addEventListener('click', function() {
    
    let DivCvadrat = document.getElementById("DivCvadrat");
    DivCvadrat.innerHTML += '<div class="newcvadrat"></div>';
    let newCvadrats = DivCvadrat.getElementsByClassName('newcvadrat');
  
  
   let newCvadrat = DivCvadrat.lastChild;
  newCvadrat.style.background =  getRandomColor();
        newCvadrat.style.width = '100px';
        newCvadrat.style.height = '100px';
        newCvadrat.style.margin = '10px';
        newCvadrat.style.display = 'inline-block';
  
  
    for (let newCvadrat of newCvadrats) {
        newCvadrat.addEventListener('click', function() {
        this.remove();
        });
    }
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  