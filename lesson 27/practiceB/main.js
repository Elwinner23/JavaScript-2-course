
const sendRequestButton = document.getElementById('sendRequest');



sendRequestButton.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000');
    const statusCode = response.status;

    if (statusCode === 200 || statusCode === 201) {
        sendRequestButton.classList.remove('error');
        sendRequestButton.classList.add('success');
    } else {
        sendRequestButton.classList.remove('success');
        sendRequestButton.classList.add('error');
    }
});