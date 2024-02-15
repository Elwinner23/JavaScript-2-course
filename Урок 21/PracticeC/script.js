class User{
    id
    name
    password
    role
    
constructor(id,name,password,role){
    this.id = id;
    this.name = name;
    this.password = password;
    this.role = role;
}
}

let user1 = new User(1,"bob", "password1", "user")

function password(){

    let inputuser = document.getElementById('user').value;
    let inputpassword = document.getElementById('password').value;

    if(inputuser == user1.name && inputpassword == user1.password){
        alert("Вход разрешен");
        return;
    }else{
        alert("Ошибка в логине и пароле")
    }
}

function forgot_your_password(){
    let inputuser = document.getElementById('pa_user').value;
    let inputpassword = document.getElementById('pa_password').value;
    let inputpapassword = document.getElementById('pa_papasword').value;

    if(inputpassword == user1.password){
        alert("Пароль не должен совпадать со старым паролем");
        return;
    }else if(inputuser !== user1.name){
        alert("Не найде пользователь с таким логином!")
        return;
    }
    else if(inputpassword !== inputpapassword){
        alert("Пароли не совпадают")
        return;
    }else{
        alert("Ваш новый пароль установлен")
        return;
    }
}