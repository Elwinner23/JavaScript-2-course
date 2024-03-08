window.addEventListener('DOMContentLoaded', function(){
    let checkbox = document.getElementById('memory');
    checkbox.addEventListener('click', function(){
        localStorage.setItem('isChecked', 'true');
    })

    const status = window.localStorage.getItem('isChecked');
    console.log(status);
    if (status == 'true'){
        let button = document.getElementById('send');
        button.addEventListener('click', function(){
            window.location.replace("main.html");
        })
    }

    localStorage.setItem('onChecked', status);
    console.log(localStorage.getItem('onChecked'))
    if(localStorage.getItem('onChecked') === 'true'){
        checkbox.checked = true;
    }
   })
   