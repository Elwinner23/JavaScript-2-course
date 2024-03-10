function numbersClick(id)
{
    let element = document.getElementById(id)
    element.classList.toggle("green")
}

let buttonCheck = document.getElementsByClassName("check__button")[0]

buttonCheck.addEventListener("click", () => {
    let buttonsGreen = Array.from(document.getElementsByClassName("green"))
    let idList = []
    let trueList = ["1", "3", "5", "7", "9"]
    buttonsGreen.forEach(element => {
        idList.push(element.id)
    });
    idList.sort()

    if (JSON.stringify(idList) === JSON.stringify(trueList))
    {
        document.body.style.backgroundColor = "green"
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
    }
    else
    {
        document.body.style.backgroundColor = "red"
    }
})


function resetLocalStorage()
{
    window.localStorage.setItem("login", '')
    window.localStorage.setItem("password", '')
    window.localStorage.setItem("isChecked", false)
    window.location.replace("http://127.0.0.1:5500/%D0%A3%D1%80%D0%BE%D0%BA28/page1/authorization.html")
}

buttonReset = document.getElementsByClassName("reset__button")[0]

buttonReset.addEventListener("click", resetLocalStorage)