class User {
    constructor(id, name, password, role) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }

    changePassword(newPassword) {
        if (this.role === "admin") {
            this.password = newPassword;
            console.log("Пароль изменен.");
        } else {
            console.log("Вы не админ");
        }
    }
}

class Admin extends User {
    constructor(id, name, password) {
        super(id, name, password, "admin");
    }
}

let user1 = new User(1, "Bob", "userPass123", "user");
let admin1 = new Admin(2, "Alice", "adminPass123");

user1.changePassword("newUserPassword");
admin1.changePassword("newAdminPassword");

console.log(user1);
console.log(admin1);