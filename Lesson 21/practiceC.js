class User {
  name;
  #password;
  id;
  role;

  get password() {
    return this.#password;
  }
  set password(newPassword) {
    let oldPassword = prompt("Введите ваш старый пароль: ");
    if (oldPassword != this.password || this.password == newPassword) {
      console.log("Ошибка!!!");
      return;
    }

    let repeatedNewPassword = prompt("Повторите новый пароль еще раз: ");

    if (repeatedNewPassword == newPassword) {
      this.#password = newPassword;
      console.log("Пароль успешно поменян");
    } else console.log("Ошибка!!!");
  }

  constructor(name, password, id, role) {
    this.name = name;
    this.#password = password;
    this.id = id;
    this.role = role;
  }
}

let user1 = new User("Elvin", "qwerty123", Date.now(), "junior data-scientist");
console.log(user1);
user1.password = "123";
console.log(user1);
