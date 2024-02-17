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