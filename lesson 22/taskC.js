const sms = document.getElementsByClassName('sms')[0];
const messages = [
  { text: 'Выйду ночью в поле с конем', sender: 'user' },
  { text: 'Ночкой тёмной тихо пойдём', sender: 'Alexander' },
  { text: 'Мы пойдём с конём по полю вдвоём', sender: 'user' }
];


messages.forEach((message) => {
  const messageElement = document.createElement('div');

  if (message.sender === 'user') {
    messageElement.classList.add('one');
  } else if (message.sender === 'Alexander') {
    messageElement.classList.add('two');
  }

  const textElement = document.createElement('p');
  textElement.innerText = message.text;
  messageElement.appendChild(textElement);

  sms.appendChild(messageElement);
});