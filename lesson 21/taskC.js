class User{
    name;
    #password;
    id;
    role;
    
    
    constructor (name, password, id, role) {
    this.name = name
    this.#password = password
    this.id = id
    this.role = role
    }
    
    get password() {
      return this.#password;
    }
    
    changePassword() {
       let oldPassword;
       let newPassword;
       let repeatPassword;
       
       oldPassword = prompt("Введите текущий пароль");
       if (oldPassword === this.#password)  {
         newPassword = prompt("Придумайте новый пароль");
         while (newPassword === oldPassword) {
           newPassword = prompt("Новый пароль не должен совпадать со старым. Придумй что-то пооригинальнее");
         }
         
        repeatPassword = prompt("Повтори новый пароль");
         
         while (repeatPassword !== newPassword) {
            repeatPassword = prompt("Пароли не совпадают, дурашка. Поробуй ввести новый пароль еще раз");
        }
         this.#password = newPassword;
         console.log("Ты поменял пароль! Ставлю ставку, что забудешь его за неделю))");
        } 
        else {
         console.log("УПс, либо ты опечатлся, либо мошенник!");
        }
    }
}

/*
let user1 = new User ("Serg", "88005553555", Date.now(), "admin");
user1.changePassword();
console.log(user1.password)
*/