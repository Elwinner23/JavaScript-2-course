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
    
    ChangePassword()
    {
        let newPassword1;
        let newPassword2;
        let inputPassword = prompt("Введите текущий пароль");
        if (inputPassword == this.#password)
        {
            newPassword1 = prompt("Введите новый пароль");
            newPassword2 = prompt("Введите новый пароль еще раз")
            if (newPassword1 == newPassword2)
            {
            this.#password = newPassword1;
            alert("Пароль успешно изменен")
            console.log(`Новый пароль: ${this.#password}`)
            }
            else
            {
                while (newPassword1 != newPassword2)
                {
                newPassword2 = prompt("Второй пароль не совпадает с первым, повторите попытку или начните заново (1)")
                if (newPassword2 == 1)
                {
                    break
                }
                this.#password = newPassword1;
                console.log(`Новый пароль: ${this.#password}`)
                }
            }
        }
        else
        {
            while (inputPassword != this.#password)
            {
                inputPassword = prompt("Неверный пароль. Введите текущий пароль еще раз или начните заново (1)");
                if (inputPassword == 1)
                {
                    break;
                }
            }
            if (inputPassword == this.#password)
            {
                newPassword1 = prompt("Введите новый пароль");
                newPassword2 = prompt("Введите новый пароль еще раз")
                if (newPassword1 == newPassword2)
                {
                    this.#password = newPassword1;
                    alert("Пароль успешно изменен")
                    console.log(`Новый пароль: ${this.#password}`)
                }
                else
                {
                    while (newPassword1 != newPassword2)
                    {
                        newPassword2 = prompt("Второй пароль не совпадает с первым, повторите попытку или начните заново (1)")
                        if (newPassword2 == 1)
                        {
                            break
                        }
                        this.#password = newPassword1;
                        console.log(`Новый пароль: ${this.#password}`)
                    }
                }
            }
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

let UserMike = new User("Mike", "12345678", Date.now(), "user")
UserMike.ChangePassword()