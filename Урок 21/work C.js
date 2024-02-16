class User{
    #name;
    #password;
    #id;
    #role;
    get name(){
      return this.#name};
    get id(){
      return this.#id};
    get password(){
      return this.#password}
    set name(newName){
      this.#name = newName};
    set password(oldPassword){
        if (oldPassword == this.#password){
            let newPassword1 = prompt('Введите новый пароль:');
            if (newPassword1 != oldPassword){
                let newPassword2 = prompt('Введите пароль повторно:');
                if (newPassword1 == newPassword2){
                    this.#password = newPassword1;
                }else{
                  alert('Пароль не подходит')}
            }else{
              alert('Новый пароль совпадает со старым')}
        }else{
          alert('Пароль неверный')}
    };
    constructor(name, password, id, role){
        this.#name = name;
        this.#password = password;
        this.#id = id;
        this.#role = role;
    };
}

let user = new User('Elvin', 'password', Date.now(), 'admin');
user.password = prompt('Введите текущий пароль:');
console.log(user.password);