//const { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } = require('card-validator-utils');
import { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } from "C:\Users\Daria\OneDrive\Рабочий стол\kod\JavaScript-2-course\Lesson26\node_modules\card-validator-utils";

let card_number = document.getElementById('card-number');
let card_date = document.getElementById('card-date');
let card_cvc = document.getElementById('cvv-code');
let card_name = document.getElementById('card-holder');

function proverka(){
    const button = document.getElementById('oplat');
    if (validateCreditCardNumber(card_number.value.replace(/\s/g, "")) && 
    card_number.value.replace(/\s/g, "").length >= 14 && 
    validateExpirationDate(card_date.value.slice(0, 2), '20' + card_date.value.slice(3, 5)) && 
    validateCVVORCVCCode(card_cvc.value) &&
    card_name.value.length >= 5){
        button.style.cssText = 'background-color: #2c79ff;';
        button.addEventListener('click', () => {
            button.style.cssText = 'background-color: #bad3fe;';
            console.log('right')
            document.getElementById('foto').style.backgroundImage = 'none';
        })
    }else{
        document.getElementById('oplat').style.cssText = 'background-color: #bad3fe;';
        button.addEventListener('click', () => {})
    };
};

proverka()
