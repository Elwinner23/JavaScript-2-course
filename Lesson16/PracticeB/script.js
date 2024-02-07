window.loginform = function() {
    var name = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var papassword = document.getElementById('pa-password').value;

    console.log("Имя: " + name);
    console.log("почта: " +  email);
    console.log("Пароль: " + papassword);

    if(password !== papassword){
    alert("Пароли не похожы")
    return;
    }
}