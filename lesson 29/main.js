import { isExpirationDateValid, isSecurityCodeValid, getCreditCardNameByNumber } from 'creditcard.js';
import { container } from './payForm';
import './style.css';

import VisaImg from "./assets/img/Visa.svg"
import AmexImg from "./assets/img/Amex.png"
import DiscoverImg from "./assets/img/Discover.jpeg"
import MirImg from "./assets/img/Mir.png"
import JCBImg from "./assets/img/jcb.png"
import MCImg from "./assets/img/MC.png"


const PayForm = document.getElementById("pay-form");
PayForm.insertBefore(container, PayForm.lastChild);

const inputDate = document.querySelector('.input-date');
const inputNumber = document.querySelector('.input-number');
const inputCode = document.querySelector('.input-code');
const inputEmail = document.querySelector('.input-email');
const inputs = document.querySelectorAll('input');
const buttonSubmit = document.querySelector('.btn');
buttonSubmit.disabled = "true"
let validNumber;

function observer() {
 
  let isInvalid = false;
  inputs.forEach(input => {
    if (input.classList.contains('invalid') || input.value === '') {
      isInvalid = true;
    }
  });

  if (isInvalid) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}


inputs.forEach(input => {
  const observerConfig = {
    attributes: true,
    attributeFilter: ['class']
  };
  const observerInstance = new MutationObserver(observer);
  observerInstance.observe(input, observerConfig);
});


observer()


inputDate.addEventListener('input', function (e) {
  const inputValue = e.target.value;
  if (inputValue.length > 2 && !(/\//g.test(inputValue))) {
    e.target.value = inputValue.slice(0, 2) + "/" + inputValue.slice(2);
  }
});

inputDate.addEventListener('blur', function (e) {
  const firstTwoChars = inputDate.value.substring(0, 2);
  const fourthAndFifthChars = inputDate.value.substring(3, 5);
  if (isExpirationDateValid(firstTwoChars, fourthAndFifthChars)) {
    inputDate.classList.remove('invalid')
  } else {
    inputDate.classList.add('invalid')
  }
})

inputNumber.addEventListener('input', function (e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '');
  const formattedText = inputText.replace(/(.{4})/g, '$1 ');
  e.target.value = formattedText.trim();
});

inputNumber.addEventListener('blur', function (e) {
  if (getCreditCardNameByNumber(inputNumber.value.trim()) !== 'Credit card is invalid!') {
    inputNumber.classList.remove('invalid')
    validNumber = inputNumber.value
  } else if (inputNumber.value.trim().startsWith('2200')) {
    inputNumber.classList.remove('invalid');
    validNumber = inputNumber.value;
  } else {
    inputNumber.classList.add('invalid')
  }
  if (validNumber) {
    let cardType = getCreditCardNameByNumber(validNumber);
    const cardTypeImage = document.getElementById("img");

    if (validNumber.startsWith("2200")) {
      cardType = "Mir";
    }

    switch (cardType) {
      case "Visa":
        cardTypeImage.style.backgroundImage = `url("${VisaImg}")`;
        break;
      case "Mastercard":
        cardTypeImage.style.backgroundImage = `url("${MCImg}")`
        break;
      case "Amex":
        cardTypeImage.style.backgroundImage = `url("${AmexImg}")`
        break;
      case "Discover":
        cardTypeImage.style.backgroundImage = `url("${DiscoverImg}")`
        break;
      case "Mir":
        cardTypeImage.style.backgroundImage = `url("${MirImg}")`
        break;
      case "JCB":
        cardTypeImage.style.backgroundImage = `url("${JCBImg}")`
      default:
        break;
    }
  }

})

inputCode.addEventListener('input', function (e) {
  if (getCreditCardNameByNumber(validNumber) === 'Amex') {
    inputCode.setAttribute('maxlength', '4');
  } else {
    inputCode.setAttribute('maxlength', '3');
  }
  const inputText = e.target.value.replace(/\D/g, '');
  e.target.value = inputText.trim();
});

inputCode.addEventListener('blur', function (e) {
  if (isSecurityCodeValid(validNumber, inputCode.value)) {
    inputCode.classList.remove('invalid')
  } else {
    inputCode.classList.add('invalid')
  }
})

inputEmail.addEventListener('blur', function (e) {
  const emailText = inputEmail.value.trim();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const isValidEmail = emailRegex.test(emailText);
  if (isValidEmail) {
    inputEmail.classList.remove('invalid');
  } else {
    inputEmail.classList.add('invalid');
  }
})