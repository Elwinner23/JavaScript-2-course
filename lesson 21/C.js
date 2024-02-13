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
    
     changePassword() {
       let currentPassord;
       let newPassword;
       let povtorPassword;
       
       
       currentPassord = prompt("Введите текущий пароль:");
       if (currentPassord === this.#password) 
       {
         newPassword = prompt("Придумайте и введите новый пароль:");
         while (newPassword === currentPassord) 
         {
           newPassword = prompt("Новый пароль не должен совпадать со старым. Введите новый пароль:");
         }
         
         povtorPassword = prompt("Повторите новый пароль:");
         
         while (povtorPassword !== newPassword) 
         {
           povtorPassword = prompt("Пароли не совпадают. Повторите ввод нового пароля:");
         }
         
         this.#password = newPassword;
         console.log("Пароль успешно изменен! Запомните его уже наконец!");
        } 
       else {
         console.log("Ошибка: неверно введен текущий пароль.");
        }
    }
}

let user1 = new User("Настя", "12345678", Date.now(), "admin");
user1.changePassword();
console.log(user1.password)