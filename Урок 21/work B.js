class User{
    #name;
    #password;
    #id;
    #role;
    get name(){
      return this.#name;
    }
    get password(){
      return this.#password;
    }
    get id(){
      return this.#id;
    }
    get role(){
      return this.#role;
    }
    set name(newName){
      this.#name = newName;
    }
    set id(newId){
      this.#id = newId;
    }
    set role(newRole){
      this.#role = newRole;
    }
    constructor(name, password, id, role){
      this.#name = name;
      this.#password = password;
      this.#id = id;
      this.#role = role;
    }
    set password(newPassword){
      if (this.role == "admin"){
        this.#password = newPassword;
        console.log("Вы успешно сменили пароль");
      }
      else{
        console.log("Недостаточно прав");
      }
    }
  }
  
  let user = new User("Milfa", "12345", Date.now(), "user");
  console.log(`Пользователь ${user.name}:`);
  user.password = "malfa228";
  
  let admin = new User("Grixa", "hoplop", Date.now(), "admin");
  console.log(`Пользователь ${admin.name}:`);
  admin.password = "miller";