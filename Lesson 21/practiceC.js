class Users{
    #name;
    #id;
    #role;
    #password;
    
    get name(){
      return this.#name;
    }
    get id(){
      return this.#id;
    }
    
    get password(){
      return this.#password;
    }
    
    get role(){
      return this.#role;
    }
    
     set password(newPassword){
       if (this.#role == 'admin'){
         this.#password = newPassword;
         console.log('Вы поменяли пароль')
       }
       else{
         console.log('Вы не admin')
       }
     }
    
    
    constructor(name, id,  role, password){
      this.#name = name
      this.#id = id
      this.#role = role
      this.#password = password
    }
  }
  
  let user1 = new Users('Juliana', Date.now(), 'admin', 'qwerty123')
  console.log(user1.password)
  user1.password = 'qwerty123JG'
  console.log(user1.password)
  
  