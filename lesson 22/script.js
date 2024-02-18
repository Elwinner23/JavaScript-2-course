let messages = [
    { text: "Привет!!", sender: "user" },
    { text: "Привет, как дела?", sender: "friend" },
    { text: "Все отлично, спасибо!", sender: "user" },
    { text: "У меня тоже все хорошо", sender: "friend" }
  ];

messages.forEach(function(message) {
    let messageUser = document.getElementsByClassName('us')
    let messageFr = document.getElementsByClassName('fr')
        if (message.sender === "user") {
            messageUser[0].textContent = message.text;
            messageUser[1].textContent = message.text;
        } 
        else if (message.sender === "friend") {
            messageFr[0].textContent = message.text;
            messageFr[1].textContent = message.text;
        }
});
