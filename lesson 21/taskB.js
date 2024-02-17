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
    
    set password(newPassword) {
      if (this.role === "admin") {
        this.#password = newPassword;
        console.log("Вы успешно сменили пароль")
      }
      else {
        console.log("Вы не можете изменить пароль, потому что не обладаете полномочиями")
        }
      }
    }

/*
let user1 = new User ("Serg", "88005553555", Date.now(), "admin");
console.log(user1)
user1.password="11111"
console.log(user1.password)
работает, я проверил, хи-хи 
*/