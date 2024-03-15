localStorage.getItem('isAuth')
window.addEventListener('DOMContentLoaded', function(){
    if (this.localStorage.getItem('isAuth') === 'false')
    {
        window.location.replace('./authorization.html')
    }
    let btn = document.querySelector('button')
    btn.addEventListener('click', (event)=>{
        this.localStorage.setItem('isAuth', 'false');
        this.window.location.replace('./authorization.html')
    })
})