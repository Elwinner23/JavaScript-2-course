//const { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } = require('card-validator-utils');
import { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } from "card-validator-utils";

let card_number = document.getElementById('numb');
let card_date = document.getElementById('expire');
let card_cvc = document.getElementById('cvv');
let card_name = document.getElementById('inputname');

function proverka(){
    const button = document.getElementById('oplat');
    if (validateCreditCardNumber(card_number.value.replace(/\s/g, "")) && 
    card_number.value.replace(/\s/g, "").length >= 14 && 
    validateExpirationDate(card_date.value.slice(0, 2), '20' + card_date.value.slice(3, 5)) && 
    validateCVVORCVCCode(card_cvc.value) &&
    card_name.value.length >= 5){
        button.style.cssText = 'background-color: #2c79ff;';
        button.disabled = false;
        console.log('good');
    }else{
        button.style.cssText = 'background-color: #bad3fe;';
        button.disabled = true;
        console.log('good');
    };
};


card_number.addEventListener('focusout', function(){
    proverka()
});

card_date.addEventListener('focusout', function(){
    proverka()
});

card_cvc.addEventListener('focusout', function(){
    proverka()
});

card_name.addEventListener('focusout', function(){
    proverka()
});