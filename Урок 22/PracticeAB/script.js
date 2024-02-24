function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i =  0; i <  6; i++) {
        color += letters[Math.floor(Math.random() *  16)];
    }
    return color;
}

function cub(){
    let box = document.createElement('div');

    box.style.width = '200px';
    box.style.height = '200px';
    box.style.backgroundColor = getRandomColor();
    box.style.display = 'inline-block';
    box.style.margin = '10px';
    box.style.marginTop = '20px';
    box.style.borderRadius = '5px';

    document.getElementById('boxContainer').appendChild(box);

    box.addEventListener('click', function(){
        box.remove();
    })
}