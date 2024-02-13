class User{
    #name;
    #password;
    #id;
    #role;
    
    
    constructor (name, password, id, role){
    this. #name = name
    this. #password = password
    this.#id = id
    this. #role = role
    }
    
    get name(){
      return this.#name;
      }
    get password()
    {
      return this.#password;
      }
    get id(){
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
    
    set password(newPassword){
      if (this.#role === "admin")
      {
        this.#password = newPassword;
        console.log("Вы поменяли пароль")
      }
      else
      {
        console.log("Вы не можете изменить пароль, потому что вы не администратор.")
      }
    }
    }
    
    
    let user1 = new User("Настя", "12345678", Date.now(), "admin");
    console.log(user1);
    user1.password="12345"
    console.log(user1.password) 