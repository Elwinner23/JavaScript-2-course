const soo = document.getElementsByClassName('soo')[0];
const messages = [
  { text: 'Привет, как дела?', sender: 'user' },
  { text: 'Привет, у меня все хорошо!', sender: 'Alecsander' },
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

  soo.appendChild(messageElement);
});