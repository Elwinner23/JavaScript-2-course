import { cardValidator } from './index.js';

// import{ detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } from "./node_modules/card-validator-utils/index.js";

// import { isExpirationDateValid, isSecurityCodeValid, getCreditCardNameByNumber, isValid} from 'creditcard.js';
// isValid('4916108926268679'); // returns true
// isExpirationDateValid('02', '2020'); // returns true
// isSecurityCodeValid('4556603578296676', '250'); // returns true
// getCreditCardNameByNumber('4539578763621486'); // returns 'Visa'

let inputCarta = document.getElementById("nomer");

inputCarta.addEventListener('input', function(e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '').slice(0, 16);
  const formattedText = inputText.replace(/(.{4})/g, '$1 ');
  e.target.value = formattedText.trim();
  if (formattedText.length < 20) {
    e.target.style.border = '2px solid red';
  } else {
    e.target.style.border = 'none';

  }

  
  if (formattedText.length > 5) {
    let cardInfo = new CardInfo(formattedText, {
      banksLogosPath: './node_modules/card-info/dist/banks-logos/',
      brandsLogosPath: './node_modules/card-info/dist/brands-logos/'
    });
    console.log(cardInfo.bankName);
    console.log(cardInfo.brandLogo);
    document.querySelector(".imagee").style.backgroundImage = `url(${cardInfo.brandLogo})`;
  }
  let cardValid = cardValidator(formattedText);
    if (cardValid) {
      console.log('Валидна');
    } else {
      console.log('Не валидна');
    }
  
});

 


let inputsrok = document.getElementById("one");

inputsrok.addEventListener('input', function(e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '').slice(0, 4);
  const formattedText = inputText.replace(/(.{2})/g, '$1/');
  e.target.value = formattedText.trim();
  if (formattedText.length < 5) {
    e.target.style.border = '2px solid red';
  } else {
    e.target.style.border = 'none';

  }
});


let inputKod = document.getElementById("two");

inputKod.addEventListener('input', function(e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '').slice(0, 3);
  const formattedText = inputText.replace(/(.{0})/g, '$1');
  e.target.value = formattedText.trim();
  if (formattedText.length < 3) {
    e.target.style.border = '2px solid red';
  } else {
    e.target.style.border = 'none';

  }
});


const email_regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
  return email_regexp.test(value);
}

const email = document.getElementById('email');
email.addEventListener('input', function (e) {
  if (isEmailValid(email.value)) {
    email.style.border = 'none';
  } else {
    email.style.border = '2px solid red';
  }
});

const button = document.querySelector("button");

function checkConditions() {
  if (inputCarta.value.length >= 15 && inputsrok.value.length >= 4 && inputKod.value.length === 3 && email.style.border === "none") {
    button.style.color = "black";
    button.style.backgroundColor = "yellow"; 
  } else {
    button.style.backgroundColor = ""; 
  }}
email.addEventListener("input", checkConditions);
inputKod.addEventListener("input", checkConditions);
inputsrok.addEventListener("input", checkConditions);
inputCarta.addEventListener("input", checkConditions);

// import { isValid,isExpirationDateValid,isSecurityCodeValid,getCreditCardNameByNumber } from './node_modules/creditcard.js/dist/creditcard.js';

// inputsrok.addEventListener("input", function() {
//   const inputValue = inputsrok.value;
//   const [month, year] = inputValue.split("/");
  
//   const numericMonth = Number(month);
//   const numericYear = Number(year);

//   const isValid = isExpirationDateValid(numericMonth, numericYear);
  
 
//   console.log("Месяц:", numericMonth);
//   console.log("Год:", numericYear);
//   console.log("Дата валидна", isValid);
// });

// inputCarta .addEventListener("input", function() {
//   const number = inputCarta.value;
//   const isValid = isValidCardNumber(number);
//   let cardName = "";
//   if (isValid) {
//     cardName = getCreditCardNameByNumber(number);
//   }

//   //
//   console.log("Номер карты:", number);
//   console.log("Валиден", isValid);
//   console.log("Имя карты:", cardName);
// });
