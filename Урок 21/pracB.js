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

    set password(newPass){
        if (this.role == "admin"){
            this.#password = newPass
        }
        else{
            console.log("You should be an admin")
        }
    }

    constructor(name, password, id, role){
        this.name = name
        this.#password = password
        this.id = id
        this.role = role
    }
}

let user1 = new User("Dasha", "12345", Date.now(), "admin")
console.log(user1.password)
user1.password = "54321"
console.log(user1.password)

let user2 = new User("Dasha", "12345", Date.now(), "user")
user2.password = "54321"