let button = document.getElementById('but')

button.addEventListener('click', async (event) =>{
    let prg = document.getElementById('square')
    await fetch('http://localhost:3000')
    .then(response => {
        state = response.status;
        if (state > 300){
          prg.style.backgroundColor = 'red';
        } else {
          prg.style.backgroundColor = 'green';
        }
      })
    
})