let button = document.getElementById('ident');
button.addEventListener('click', (event) =>{
    fetch('http://localhost:3000/')
  .then(response => {
    console.log(response.status);
    if (response.ok) {
        button.style.backgroundColor = 'pink';
    } else {
        button.style.backgroundColor = 'black';
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
})