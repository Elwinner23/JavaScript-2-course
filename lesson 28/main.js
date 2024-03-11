window.addEventListener('DOMContentLoaded', function() {
    let login = document.querySelector('#email');
    let password = document.querySelector('#password');
    let checkbox = document.querySelector('#checkbox');
    let button = document.querySelector('#button');
  
    button.addEventListener('click', function() {
      if (login.value && password.value){
        let isChecked = checkbox.checked;
        localStorage.setItem('isChecked', isChecked);
        
        if (isChecked) {
            window.location.replace('main.html'); //переход на страницу с успешной авторизацией
          } else {
            login.focus(); //переход в поле "логин", потому что галка не нажата, но должна быть нажата
          }
        }
      });
    

    let isChecked = localStorage.getItem('isChecked');

    if (isChecked === 'true') {
      checkbox.checked = true;
    }
  
   
  });