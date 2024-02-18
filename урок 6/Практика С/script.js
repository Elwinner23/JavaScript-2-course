//оно почему-то не работает,а подставила этот код в урок 1 в js файл

const messages = [
    { text: 'Привет, как правильно переносить макет из Figma?', sender: 'me' },
    { text: '1.Включи режим просмотра для программистов 2.Изучи каждый элемент 3.Копируй настройки каждого элемента дизайна в свой код', sender: 'other' },
    { text: 'У меня точно получится?', sender: 'me' },
    { text: '100%, если что, мы всегда поможем тебе)', sender: 'other' },
    ];
    
    messages.forEach(message => {
    const messageElem = document.createElement('div');
    messageElem.textContent = message.text;
    
    if (message.sender === 'me') {
    messageElem.style.float = 'right';
    } else {
    messageElem.style.float = 'left';
    }
    
    document.body.appendChild(messageElem);
    });