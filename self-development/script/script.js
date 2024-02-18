function chat(event) {
    if (event.key === 'Enter') {
        let message = document.getElementById('messageInput').value;
        let user = document.createElement('p');

        let userMessage = "You: ";

        if (message === "") {
            alert("Текст сообщения пустой !");
            return;
        }

        user.style.color = "white";
        user.style.fontSize = "18px";
        user.style.fontWeight = "bold";

        user.innerHTML = userMessage + '<br>' + message;
        document.getElementById('chatBody').appendChild(user);
        document.getElementById('messageInput').value = "";

        gpt(message);
    }
}

function gpt(userMessage) {
    $.ajax({
        url: "http://127.0.0.1:5000/",
        type: "GET",
        data: { user_message: userMessage },
        success: function (response) {
            console.log(response);

            displayResponse(response.result);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function displayResponse(resultMessages) {
    let gptResponse = document.createElement('p');

    gptResponse.style.color = "white";
    gptResponse.style.fontSize = "18px";
    gptResponse.style.fontWeight = "bold";

    gptResponse.innerHTML = "GPT: <br>" + resultMessages.join('<br>');

    document.getElementById('chatBody').appendChild(gptResponse);
}
