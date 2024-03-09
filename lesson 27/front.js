let button = document.getElementById('identifier');
button.addEventListener('click', (event) =>{
    fetch('http://localhost:3000/')
  .then(response => {
    console.log(response.status);
    if (response.ok) {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
})