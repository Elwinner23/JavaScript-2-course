function toLogin()
{
    let login = document.getElementById("login__input").value;
    let password = document.getElementById("password__input").value;
    let isCheck = window.localStorage.getItem("isChecked")
    if (isCheck == "true")
    {
        window.localStorage.setItem("login", login)
        window.localStorage.setItem("password", password)
        window.location.replace("../page2/main.html")
    }
    else
    {
        window.localStorage.setItem("login", null)
        window.localStorage.setItem("password", null)
        window.location.replace("http://127.0.0.1:5500/%D0%A3%D1%80%D0%BE%D0%BA28/page2/main.html")
    }
}

let button = document.getElementById("to-login__button")
let login = document.getElementById("login__input");
let password = document.getElementById("password__input");
button.addEventListener("click", toLogin)


function toSetGal()
{
    let square = document.getElementById("square")
    let isCheck = window.localStorage.getItem("isChecked")
    if (isCheck == "true")
    {
        window.localStorage.setItem("isChecked", false)
        square.innerHTML = ''
    }
    else
    {
        window.localStorage.setItem("isChecked", true)
        square.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="17px" height="17px"><path fill="#008000" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg>'
    }
}

if (window.localStorage.getItem("isChecked") == "true")
{
    square.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="17px" height="17px"><path fill="#008000" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg>'
    login.value = window.localStorage.getItem("login")
    password.value = window.localStorage.getItem("password")
    window.location.replace("http://127.0.0.1:5500/%D0%A3%D1%80%D0%BE%D0%BA28/page2/main.html")
}