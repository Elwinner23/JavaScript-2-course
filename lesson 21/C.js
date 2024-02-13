class User
{
  #name;
  #password;
  #id;
  #role;
  
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
    
  set id(newId)
  {
    this.#id = newId
  }
  
  set role(newRole)
  {
    this.#role = newRole
  }
  
  constructor(name, password, id, role)
  {
    this.#name = name;
    this.#password = password;
    this.#id = id;
    this.#role = role;
  }

  ChangePassword()
    {
        let p1;
        let p2;
        let inputp = prompt("Введите текущий пароль");
        if (inputp == this.#password)
        {
            p1 = prompt("Введите новый пароль");
            prompt("Введите новый пароль еще раз")
            if (p1 == p2)
            {
            this.#password = p1;
            alert("Пароль успешно изменен")
            console.log(`Новый пароль: ${this.#password}`)
            }
            else
            {
                while (p1 != p2)
                {
                p2 = prompt("Второй пароль не совпадает с первым, повторите попытку!")
                  
                this.#password = p1;
                console.log(`Новый пароль: ${this.#password}`)
                }
            }
        }
        else
        {
            while (inputp != this.#password)
            {
                inputp = prompt("Неверный пароль. Введите текущий пароль еще раз!");
            }
            if (inputp == this.#password)
            {
                p1 = prompt("Введите новый пароль");
                p2 = prompt("Введите новый пароль еще раз")
                if (p1 == p2)
                {
                    this.#password = p1;
                    alert("Пароль успешно изменен")
                    console.log(`Новый пароль: ${this.#password}`)
                }
                else
                {
                    while (p1 != p2)
                    {
                        p2 = prompt("Второй пароль не совпадает с первым, повторите попытку")
                        this.#password = p1;
                        console.log(`Новый пароль: ${this.#password}`)
                    }
                }
            }
        }
    }
}

let user = new User("Pupu", "1234", Date.now(), "user")
user.ChangePassword()
