function chat(event) {
    if (event.key === "Enter") {
        let message = document.getElementById('messageInput').value;

        let user = document.createElement('p');
        let span = document.createElement('span'); 

        user.style.display = "flex";
        user.style.color = "white";
        user.style.fontSize = "14px";
        user.style.alignItems = 'center';
        user.style.marginLeft = '5px';
        user.style.fontWeight = 'bold';

        span.style.backgroundColor = "blue";
        span.style.padding = "5px  10px";
        span.style.borderRadius = '10px';

        span.textContent = message;
        user.appendChild(span);

        document.getElementById('chatBody').appendChild(user);

        document.getElementById('messageInput').value = "";

        if (message.toLowerCase() === 'привет') {
            sendResponse('Привет, как дела?');
        } else if (message.toLowerCase() === 'нормально' || message.toLowerCase() === 'отлично') {
            sendResponse('Отлично, я рад слышать');
        } else if (message.toLowerCase() === 'как у тебя дела' || message.toLowerCase() === 'а у тебя как' || message.toLowerCase() === 'хорошо твои как') {
            sendResponse('У меня все хорошо');
        }else if(message.toLowerCase() === 'пока'){
            sendResponse('Пока всего хорошего')
        }else {
            sendResponse('Я тебя не понимаю');
        }
    }
}

function sendResponse(responseText) {

    let bot = document.createElement('p');
    let botSpan = document.createElement('span');

    bot.style.display = "flex";
    bot.style.color = "white";
    bot.style.fontSize = "14px";
    bot.style.alignItems = 'center';
    bot.style.marginLeft = '5px';
    bot.style.fontWeight = 'bold';
    bot.style.flexDirection = 'row-reverse';


    botSpan.style.backgroundColor = "green";
    botSpan.style.padding = "5px  10px";
    botSpan.style.borderRadius = '10px';

    botSpan.textContent = responseText;
    bot.appendChild(botSpan);

    document.getElementById('chatBody').appendChild(bot);
}