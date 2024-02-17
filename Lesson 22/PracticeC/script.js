let allMessages = document.getElementsByClassName("message");
console.log(allMessages);

let user1Messages = document.getElementsByClassName("user1");
let user2Messages = document.getElementsByClassName("user2");

console.log(user1Messages)
console.log(user2Messages)

document.addEventListener("click", e => {
    if (e.target.classList["2"] == "user1") {
        for (let item of user2Messages) {
            item.classList.toggle("nonestyle")
        }
    }
    else if (e.target.classList["2"] == "user2") {
        for (let item of user1Messages) {
            item.classList.toggle("nonestyle")
        }
    }
})

let buttonAllMessages = document.querySelector("#allMessages")
let buttonUser1Messages = document.querySelector("#user1Messages")
let buttonUser2Messages = document.querySelector("#user2Messages")



document.addEventListener("click", e => {
    if (e.target.id == "allMessages") {
        console.log("Все");  
        for (let item of user1Messages) {
            item.style.display = ""
        }
        for (let item of user2Messages) {
            item.style.display = ""
        }
    }
    else if (e.target.id == "user1Messages") {
        console.log("Первый пользователь");  
        for (let item of user1Messages) {
            item.style.display = ""
        }
        for (let item of user2Messages) {
            item.style.display = "none"
        }
    }
    else if (e.target.id == "user2Messages") {
        console.log("Второй пользователь");  
        for (let item of user1Messages) {
            item.style.display = "none"
        }
        for (let item of user2Messages) {
            item.style.display = ""
        }
    }
})