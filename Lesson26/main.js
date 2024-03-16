// import { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } from "card-validator-utils";


document.addEventListener('DOMContentLoaded', function() {
    const inputNumber = document.getElementById("num")
    const inputData = document.getElementById("time")
    const inputCVV = document.getElementById("cvv")
    const button = document.getElementById("but")

    inputNumber.addEventListener('input', (event) => {
        let inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
        if (inputText.length > 16) {
            inputText = inputText.slice(0, 16);
        }
        const formattedText = inputText.replace(/(.{4})/g, '$1 ');
        event.target.value = formattedText.trim();
    });

    inputData.addEventListener('input', (event) => {
        let inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
        if (inputText.length > 4) {
            inputText = inputText.slice(0, 4);
        }
        const formattedText = inputText.replace(/^(\d{2})(\d{0,2})$/, '$1/$2');
        event.target.value = formattedText.trim();
    });

    inputCVV.addEventListener('input', (event) => {
        let inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
        if (inputText.length > 3) {
            inputText = inputText.slice(0, 3);
        }
        event.target.value = inputText.trim();
    });

    button.addEventListener('click', (event) =>{

    });

    function checkFormValidity() {
        const cardNumber = inputNumber.value.replaceAll(' ', '').replace(/\D/g, '');
        const expirationDate = inputData.value.replaceAll('/', '').replace(/\D/g, '');
        const cvv = inputCVV.value;
        console.log(cardNumber);

        return parsel.detectCardType(cardNumber) &&
            parsel.validateCVVORCVCCode(cardNumber, cvv) &&
            parsel.validateExpirationDate(expirationDate) &&
            parsel.validateCreditCardNumber(cardNumber);
    }

    button.addEventListener('click', function(event) {
        if (checkFormValidity){
            alert('Форма отправлена!');
        } else {
            alert("Есть ошибки в форме")
        }
    });
});