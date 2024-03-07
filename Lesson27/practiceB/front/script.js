let button = document.getElementById('ident');
button.addEventListener('click', (event) =>{
    fetch('http://localhost:3000/')
  .then(response => {
    console.log(response.status); // Выведет статус код ответа
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