const sms = document.getElementsByClassName('sms')[0];
const messages = [
  { text: 'привет, как дела?', sender: 'user' },
  { text: 'привет, у меня все хорошо!', sender: 'Alecsander' },
  { text: 'Отлично!', sender: 'user' }
];


messages.forEach((message) => {
  const messageElement = document.createElement('div');

 
  if (message.sender === 'user') {
    messageElement.classList.add('one');
  } else if (message.sender === 'Alecsander') {
    messageElement.classList.add('two');
  }

  const textElement = document.createElement('p');
  textElement.innerText = message.text;
  messageElement.appendChild(textElement);

  sms.appendChild(messageElement);
});