//const { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } = require('card-validator-utils');
import { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } from "card-validator-utils";

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
        button.disabled = false;
    }else{
        button.style.cssText = 'background-color: #bad3fe;';
        button.disabled = true;
    };
};



card_number.addEventListener('input', function (e) { 
    const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, ''); 
    const formattedText = inputText.replace(/(.{4})/g, '$1 '); 
    e.target.value = formattedText.trim(); 
    let cardType = detectCardType(inputText);
    if (inputText.length >= 14){
        if (cardType == 'visa'){
            console.log("visa");
        }else if(cardType == 'mastercard'){
            console.log("mc");
        }else if(cardType == 'discover'){
            console.log("disc");
        }else if(cardType == 'american express'){
            console.log("AE"); 
        };
        
    }else{
        document.getElementById('foto').style.backgroundImage = 'none';
    };
    proverka();
});