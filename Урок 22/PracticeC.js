window.addEventListener("DOMContentLoaded", (event) => {
var messages = [
    { sender: 'Пользователь', text: 'Привет, как дела?' },
    { sender: 'Бот', text: 'Привет! У меня все отлично' },
    { sender: 'Пользователь', text: 'Что нового?' },
    { sender: 'Акшин', text: 'Все как обычно, ничего особенного.' }
];

function renderMessages() {
var messagesDiv = document.getElementById('messages');
messagesDiv.innerHTML = '';
messages.forEach(function(message) {
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message.text;
    if (message.sender === 'Пользователь') {
    messageDiv.classList.add('message', 'user-message');
    } else{
    messageDiv.classList.add('message', 'another-message');
    }
    messagesDiv.appendChild(messageDiv);
});
}

renderMessages();
});