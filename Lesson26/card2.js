const { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } = require('card-validator-utils');
//import { detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } from "C:\Users\Daria\OneDrive\Рабочий стол\kod\JavaScript-2-course\Lesson26\node_modules\card-validator-utils";

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
            card_number.value = '';
            card_date.value = '';
            card_cvc.value = '';
            card_name.value = '';
            button.style.cssText = 'background-color: #bad3fe;';
            document.getElementById('foto').style.backgroundImage = 'none';
        })
    }else{
        document.getElementById('oplat').style.cssText = 'background-color: #bad3fe;';
        button.addEventListener('click', () => {})
    };
};


card_number.addEventListener('input', function (e) { 
    const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, ''); 
    const formattedText = inputText.replace(/(.{4})/g, '$1 '); 
    e.target.value = formattedText.trim(); 
    let cardType = detectCardType(inputText);
    if (inputText.length >= 14){
        if (cardType == 'visa'){
            document.getElementById('foto').style.backgroundImage = `url('${image.visa}')`;
        }else if(cardType == 'mastercard'){
            document.getElementById('foto').style.backgroundImage = `url('${image.mastercard}')`;
        }else if(cardType == 'discover'){
            document.getElementById('foto').style.backgroundImage = `url('${image.discover}')`; 
        }else if(cardType == 'american express'){
            document.getElementById('foto').style.backgroundImage = `url('${image.amer_ex}')`; 
        };
        
    }else{
        document.getElementById('foto').style.backgroundImage = 'none';
    };
    proverka();
});
card_date.addEventListener('input', function (e) { 
    const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, ''); 
    const formattedText = inputText.replace(/(.{2})/g, '$1/'); 
    e.target.value = formattedText.slice(-1) == '/'? formattedText.replace(/\/$/, ''): formattedText.trim(); 
    proverka();
});
card_cvc.addEventListener('input', function (e) { 
    const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, ''); 
    e.target.value = inputText.trim(); 
    proverka();
});
card_name.addEventListener('input', function (e) { 
    const inputText = e.target.value.replaceAll(' ', '').replace(/\d/g,''); 
    e.target.value = inputText.trim(); 
    proverka();
    
});