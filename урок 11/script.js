window.addEventListener('DOMContentLoaded', function() {
  let loginField = document.querySelector('#login');
  let passwordField = document.querySelector('#password');
  let checkbox = document.querySelector('#checkbox');
  let button = document.querySelector('#loginButton');

  //события на кнопке
  button.addEventListener('click', function() {
    // заполнение полей
    if (loginField.value && passwordField.value) {
      // состояние чекбокса
      let isChecked = checkbox.checked;

      // Сохраняем состояние чекбокса в localstorage
      localStorage.setItem('isChecked', isChecked);

      // Переходим на страницу main.html
      window.location.replace('main.html');
    }
  });

  // Проверяем, есть ли данные в localstorage
  let isChecked = localStorage.getItem('isChecked');

  // Если есть данные и состояние чекбокса было отмечено, то ставим галочку
  if (isChecked === 'true') {
    checkbox.checked = true;
  }

  // Проверяем, находимся ли мы на странице main.html
  // Если да, то делаем проверку
  if (window.location.href.includes('main.html') && !isChecked) {
    window.location.replace('authorization.html');
  }
});