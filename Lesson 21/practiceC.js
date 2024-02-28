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
  set name(newName){
    this.#name = newName
  }
  
  ChangeP(){
    let lastP = prompt('Введите текущий пароль:')
    if (lastP == this.#password){
      let newP1 = prompt('Введите новый пароль:')
      if (newP1 != this.#password){
        let newP2 = prompt('Повторите новый пароль:')
          if (newP1 == newP2){
            alert('Пароль успешно изменён')
              this.#password = newP1
          }
           else{alert('Пароли должны совпадать')}
    }
       else{
        alert('Старый и новый пароль должны различаться')
      }
  }
     else{
       alert('Пароль неверный')}
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
user1.ChangeP()
console.log(user1.password)


