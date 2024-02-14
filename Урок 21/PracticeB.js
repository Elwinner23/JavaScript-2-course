class User{
    #name;
    #password;
    #id;
    #role;
    get name() {
        return this.#name;
    }
    get id() {
        return this.#id;
    }
    set name(newName) {
        this.#name = newName
    }
    set password(newPassword) {
        if (this.#role == "admin")
            this.#password = newPassword;
    }
    constructor (name,password,id,role) {
        this.#name = name;
        this.#password = password;
        this.#id = id;
        this.#role = role;
    }
}

let user1 = User('Akshin', 'qwerty123', Date.now(), "admin");
console.log(user1);
user1.password('zxcvbn987');
console.log(user1);
console.log(user2);
user2.password('pu-pu-pu');
console.log(user2);