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
  constructor (name,password,id,role) {
      this.#name = name;
      this.#password = password;
      this.#id = id;
      this.#role = role;
  }
  changePassword() {
    let lastPassword = prompt("Введите старый пароль")
    if (lastPassword == this.#password)
    {
      let newPassword = prompt("Введите новый пароль") 
      if (newPassword != this.#password)
      {
        let currentNewPassword = prompt("Повторите новый пароль")
        if (currentNewPassword == newPassword)
          this.#password = newPassword;
        else console.log("Пароли должны совпадать")
      }
      else console.log("Новый пароль не должен совпадать со старым")
    }
    else console.log("Вы ввели не правильный пароль")
  }
}

let user1 = User('Akshin', 'qwerty123', Date.now(), "admin");
console.log(user1);
user1.password();
console.log(user1);
console.log(user2);
user2.changePassword();
console.log(user2);