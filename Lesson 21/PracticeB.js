class User
{
  #name;
  #password;
  #id;
  #role;
  
  constructor(name, password, id, role)
  {
    this.#name = name;
    this.#password = password;
    this.#id = id;
    this.#role = role;
  }
  
  get name()
  {
    return this.#name;
  }
  
  get password()
  {
    return this.#password;
  }
  
  get id()
  {
    return this.#id;
  }
  
  get role()
  {
    return this.#role;
  }
  
  set name(newName)
  {
    this.#name = newName;
  }
  
  
  set password(newPassword)
  {
    if (this.role == "admin")
    {
      this.#password = newPassword;
      console.log("Вы успешно сменили пароль")
    }
    else
    {
      console.log("Для смены пароля недостаточно прав")
    }
  }
  
  set id(newId)
  {
    this.#id = newId
  }
  
  set role(newRole)
  {
    this.#role = newRole
  }
  
}

let MineUser = new User("MineUser", "qwerty", Date.now(), "user")
console.log(`Пользователь ${MineUser.name}:`)
MineUser.password = "asdfgh"

let MineAdmin = new User("MineAdmin", "qazwsx", Date.now(), "admin")
console.log(`Пользователь ${MineAdmin.name}:`)
MineAdmin.password = "edcrfv"