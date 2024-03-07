

let button = document.getElementById('ident')

fetch('http://localhost:3000')
    .then((response) => {
        console.log(response.status)
    } )