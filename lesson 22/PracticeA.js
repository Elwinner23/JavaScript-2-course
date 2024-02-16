document.getElementById('CreateCvadrat').addEventListener('click', function() {
    let DivCvadrat = document.getElementById("DivCvadrat");
 DivCvadrat.innerHTML += '<div class="newcvadrat"></div>';



 let newCvadrats = document.getElementsByClassName('newcvadrat');
 for (let newCvadrat of newCvadrats){
 newCvadrat.style.background = 'red';
 newCvadrat.style.width = '100px';
 newCvadrat.style.height = '100px';
 newCvadrat.style.margin = '10px';
 newCvadrat.style.display = 'inline-block';
}
 

});