class User {
    constructor(username) {
        this.username = username;
        this.password = 'password123'; 
    }

    changePasswordAlgorithm() {
        const currentPassword = prompt('Введите текущий пароль:');
        
        if (currentPassword === this.password) {
            const newPassword = prompt('Введите новый пароль:');
            if (newPassword === this.password) {
                console.log('Новый пароль не должен совпадать со старым');
            } else {
                const repeatNewPassword = prompt('Повторите новый пароль:');
                if (newPassword !== repeatNewPassword) {
                    console.log('Пароли не совпадают');
                } else {
                    this.password = newPassword;
                    console.log('Пароль успешно изменен');
                }
            }
        } else {
            console.log('Неверный текущий пароль');
        }
    }
}

const user1 = new User('John');

user1.changePasswordAlgorithm();
