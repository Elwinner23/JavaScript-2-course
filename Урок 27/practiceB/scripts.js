async function getResponse(){
    await fetch("http://localhost:3000/")
    .then(response => {
        if (response.ok){
            let square = document.getElementById("square")
            let result = document.getElementById("result")
            if (square.classList[0] == "red"){
                square.classList.remove("red")
            }
            square.classList.add("green")
            result.textContent = `Результат: успех`}
            else{
                let square = document.getElementById("square")
                let result = document.getElementById("result")
                if (square.classList[0] == "green"){
                    square.classList.remove("green")
                }
                square.classList.add("red")
                result.textContent = `Результат: ошибка ${response.status}`
            }
        })
    }

let button = document.querySelector("#send-request__button")
button.addEventListener("click", getResponse)