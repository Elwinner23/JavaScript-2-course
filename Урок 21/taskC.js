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
  get password() {
    return this.#password;
  }
  constructor (name, password, id, role) {
      this.#name = name;
      this.#password = password;
      this.#id = id;
      this.#role = role;
  }
  changePassword() {
    let lastPassword = prompt("Введите пароль")
    if (lastPassword == this.#password)
    {
      let newPassword = prompt("Введите новый пароль") 
      if (newPassword != this.#password)
      {
        let newPassword2 = prompt("Повторите новый пароль")
        if (newPassword2 == newPassword)
          this.#password = newPassword;
        else console.log("Пароли должны совпадать")
      }
      else console.log("Новый пароль совпадает со старым")
    }
    else console.log("Введите правильный пароль")
  }
}

let user1 = new User('Boris', '25630', Date.now(), "admin");
console.log(user1.password);
user1.changePassword();
console.log(user1.password);