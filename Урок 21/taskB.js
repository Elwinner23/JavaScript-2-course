class User{
    name;
    #password;
    id;
    role;
  
    get password(){
        return this.#password
    }

    set password(newPassword){
        if (this.role == "admin"){
            this.#password = newPassword
        }
        else{
            console.log("Ты не админ(")
        }
    }

    constructor(name, password, id, role){
        this.name = name
        this.#password = password
        this.id = id
        this.role = role
    }
}

let user1 = new User("Boris", "25630", Date.now(), "admin")
console.log(user1.password)
user1.password = "111307"
console.log(user1.password)

let user2 = new User("Denis", "25630", Date.now(), "user")
user2.password = "111307"