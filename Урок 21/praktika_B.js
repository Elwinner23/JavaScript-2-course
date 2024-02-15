class User{
    #name;
    #password;
    #id;
    #role;
    get name(){return this.#name};
    get id(){return this.#id};
    get password(){return this.#password}
    set name(newName){this.#name = newName};
    set password(newPassword){
        if (this.#role == 'admin'){
            this.#password = newPassword
        }
    }
    constructor(name, password, id, role){
        this.#name = name;
        this.#password = password;
        this.#id = id;
        this.#role = role;
    }
    
}

let user = new User('Kirill', 'qwerty', Date.now(), 'admin');
user.password = 'qweasd';
console.log(user.password)