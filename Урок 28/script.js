window.addEventListener('DOMContentLoaded', function(){
    let checkbox = document.querySelector('#checkbox');
    let login = document.querySelector('#username');
    let pass = document.querySelector('#password');
    let button = document.querySelector('#auth');
    
    button.addEventListener('click', function(){
        if (login.value && pass.value){
            let chek = checkbox.checked;
            localStorage.setItem('isChecked', 'true');
            window.location.replace("main.html");
        }
    })

    let chek = localStorage.getItem('isChecked');
    if (chek === 'true'){
        checkbox.checked = true;
    }

    if(this.window.location.href.includes('main.html') (chek)){
        this.window.location.replace('authorization.html');
    } 
})

