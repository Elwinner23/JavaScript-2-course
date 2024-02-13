class User {
    constructor(username, role) {
        this.username = username;
        this.role = role;
        this.password = 'password123';
    }

    changePassword(newPassword, currentUser) {
        if (currentUser.role === 'admin') {
            this.password = newPassword;
            console.log('Пароль успешно изменен на', newPassword);
        } else {
            console.log('У вас нет прав для изменения пароля');
        }
    }
}

const user1 = new User('John', 'user');
const admin1 = new User('Bob', 'admin');

user1.changePassword('newPassword123', user1); 

admin1.changePassword('admin123', admin1);