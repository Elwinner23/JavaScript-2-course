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

  messageElement.innerText = message.text;
 

  sms.appendChild(messageElement);
});