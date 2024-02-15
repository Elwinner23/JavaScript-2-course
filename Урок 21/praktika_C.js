class User{
    #name;
    #password;
    #id;
    #role;
    get name(){return this.#name};
    get id(){return this.#id};
    get password(){return this.#password}
    set name(newName){this.#name = newName};
    set password(oldPassword){
        if (oldPassword == this.#password){
            let newPassword1 = prompt('Введите новый пароль:');
            if (newPassword1 != oldPassword){
                let newPassword2 = prompt('Введите новый пароль ешё раз:');
                if (newPassword1 == newPassword2){
                    this.#password = newPassword1;
                }else{alert('Пароли не совпадают.')}
            }else{alert('Новый пароль не должен совпадать со старым.')}
        }else{alert('Пароль неверный.')}
    };
    constructor(name, password, id, role){
        this.#name = name;
        this.#password = password;
        this.#id = id;
        this.#role = role;
    };
}

let user = new User('Kirill', 'qwerty', Date.now(), 'admin');
user.password = prompt('Введите текущий пароль:');
console.log(user.password);