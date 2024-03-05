class User {
  name;
  #password;
  id;
  role;

  get password() {
    return this.#password;
  }
  set password(newPassword) {
    if (this.role == "admin") this.#password = newPassword;
    else console.log("У вас нет права менять пароль");
  }

  constructor(name, password, id, role) {
    this.name = name;
    this.#password = password;
    this.id = id;
    this.role = role;
  }
}

let user1 = new User("Elvin", "qwerty123", Date.now(), "junior data-scientist");
console.log(user1.password);
user1.password = "123";
console.log(user1);
