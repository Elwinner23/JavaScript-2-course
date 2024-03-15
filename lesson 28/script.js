function proverka(){
    if (localStorage.getItem('isChecked') == 'true' &&
     document.getElementById('login').value.length >= 5 &&
     document.getElementById('password').value.length >= 5){
        window.location.replace('./main.html');
    }
};
window.addEventListener('DOMContentLoaded', function(){
    localStorage.removeItem('isChecked');
    let checkbox = document.querySelector('#checkbox');
    checkbox.addEventListener('click', function(){
        if (localStorage.getItem('isChecked') == null || localStorage.getItem('isChecked') == 'false'){
            localStorage.setItem('isChecked', 'true');
        }else{
            localStorage.setItem('isChecked', 'false');
        };  
    })
    document.querySelector('#ok').addEventListener('click', () => proverka());
});