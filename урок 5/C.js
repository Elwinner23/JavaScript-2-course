var users = [
    { username: "fox", password: "123456" },
    { username: "Alex", password: "362378" },
    ];
    
    function checkPassword(username, password) {
    for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
    return true;
    }
    }
    return false;
    }
    
    function changePassword(username) {
    var user = users.find(function(user) {
    return user.username === username;
    });
    
    if (user) {
    var currentPassword = prompt("Введите текущий пароль:");
    
    if (currentPassword === user.password) {
    var newPassword = prompt("Введите новый пароль:");
    
    if (newPassword === currentPassword) {
    alert("Новый пароль не должен совпадать со старым!");
    return;
    }
    
    var confirmPassword = prompt("Повторите новый пароль:");
    
    if (newPassword !== confirmPassword) {
    alert("Пароли должны совпадать!");
    return;
    }
    
    user.password = newPassword;
    alert("Пароль успешно изменен!");
    
    } else {
    alert("Неверный текущий пароль!");
    }
    }
    }
    
    var username = prompt("Введите имя пользователя:");
    var password = prompt("Введите пароль:");
    
    if (checkPassword(username, password)) {
    alert("Добро пожаловать, " + username + "!");
    var changePasswordAnswer = prompt("Хотите изменить пароль? (да/нет)");
    
    if (changePasswordAnswer === "да") {
    changePassword(username);
    }
    user.changePassword("user123", "newUserPassword");
    }