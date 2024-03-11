window.addEventListener('DOMContentLoaded', function(){
    let checkbox = document.querySelector('.checkbox');
    checkbox.checked = localStorage.getItem('isChecked') === 'true'; // восстановим состояние чекбокса из LocalStorage
    checkbox.addEventListener('click', function(){
        localStorage.setItem('isChecked', checkbox.checked ? 'true' : 'false'); // сохраняем состояние чекбокса в LocalStorage
    });
});

