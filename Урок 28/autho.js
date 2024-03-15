this.localStorage.getItem('isAuth')
window.addEventListener('DOMContentLoaded', function(){
    if (this.localStorage.getItem('isAuth') === 'true')
    {
        window.location.replace('./main.html')
    }
    let checkbox = this.document.querySelector('#checkbox');
    let login = this.document.querySelector('#login');
    let password = this.document.querySelector('#password')
    checkbox.addEventListener('change', function(){
            localStorage.setItem('isChecked', `${checkbox.checked}`);
            localStorage.setItem('login', `${login.value}`);
            localStorage.setItem('password', `${password.value}`);
    })
    if (this.localStorage.getItem('isChecked') === 'true')
    {
        checkbox.checked = true;
        login.value = this.localStorage.getItem('login');
        password.value = this.localStorage.getItem('password');
    }
    let btn = document.querySelector('button')
    btn.addEventListener('click', (event)=>{
        this.localStorage.setItem('isAuth', 'true');
        this.window.location.replace('./main.html')
    })
})


