class User {
	constructor(name, id, password, role) {
		this.name = name;
		this.id = id;
		this.password = password;
		this.role = role;
	}

	changePassword(newPassword) {
		if (this.role === "admin") {
			this.password = newPassword;
			console.log("Пароль успешно изменен!");
		} else {
			console.log("У вас нет разрешения на изменение пароля.");
		}
	}
}

const user1 = new User("Alex", Date.now(), "password123", "user");
user1.changePassword("newpassword456"); 

const admin = new User("Adam", Date.now(), "adminpassword", "admin");
admin.changePassword("newadminpassword");
console.log(admin.password);