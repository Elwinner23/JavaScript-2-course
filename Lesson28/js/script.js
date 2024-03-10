const password = document.getElementById('password');

function checkpassword() {
    const checkpassword = document.getElementById('checkpassword');
    if (password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text');
        checkpassword.style.backgroundImage = "url(https://snipp.ru/demo/495/view.svg)"
    } else {
        password.setAttribute('type', 'password');
        checkpassword.style.backgroundImage = "url(https://snipp.ru/demo/495/no-view.svg)"
    }
}

// функция возврощает true или false если нажат ли check
function login(){
    const pa_password = password.value;
    const check = document.getElementById('check');

    //console.log(check.checked)

    if(check.checked){
        window.localStorage.setItem("password", pa_password)
        console.log("Пароль сохранен")
    }else{
        console.log("Пароль не сохранен")
    }

    //Возврощает пароль
    //const pu_password = window.localStorage.getItem("password");
    //console.log(pu_password);

}