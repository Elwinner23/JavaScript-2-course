class User{
    name;
    #password;
    id;
    role;

    get name(){
        return this.name
    }

    get password(){
        return this.#password
    }

    constructor(name, password, id, role){
        this.name = name
        this.#password = password
        this.id = id
        this.role = role
    }

    changePassword() {
        let lastPass = prompt("Введите ваш пароль")
        if (lastPass == this.#password)
        {
            let newPass = prompt("Введите новый пароль") 
            if (newPass != this.#password)
            {
            let newPass2 = prompt("Повторите новый пароль")
            if (newPass2 == newPass)
                this.#password = newPass;
            else console.log("Пароли должны совпадать")
            }
            else console.log("Новый пароль совпадает со старым")
        }
        else console.log("Введите правильный пароль")
    }
}