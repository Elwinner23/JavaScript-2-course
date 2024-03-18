import { isExpirationDateValid, isSecurityCodeValid, getCreditCardNameByNumber } from 'creditcard.js';
import { container } from './payForm';
import './style.css';

import VisaImg from "./assets/img/Visa.svg"
import AmexImg from "./assets/img/Amex.png"
import DiscoverImg from "./assets/img/Discover.jpeg"
import MirImg from "./assets/img/Mir.png"
import JCBImg from "./assets/img/jcb.png"
import MCImg from "./assets/img/MC.png"

//Visa: 4242 4242 4242 4242
// Mastercard: начинается с 5, например 5555 1234 5678 9012 или 5100 7890 1234 5678.
// American Express: начинается с 34 или 37, например 3412 345678 90123 или 3710 890123 45678.
// Discover: начинается с 6, например 6011 2345 6789 0123 или 6440 1234 5678 9012.
// JCB: начинается с 35, например 3528 1234 5678 9012 или 3566 7890 1234 5678.
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

// Создаем функцию-наблюдателя
function observer() {
  // Проверяем все поля на наличие класса invalid и на пустое значение
  let isInvalid = false;
  inputs.forEach(input => {
    if (input.classList.contains('invalid') || input.value === '') {
      isInvalid = true;
    }
  });
  // Обновляем статус кнопки в зависимости от наличия класса invalid и от пустого значения
  if (isInvalid) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}

// Добавляем наблюдателя к каждому полю ввода
inputs.forEach(input => {
  const observerConfig = {
    attributes: true,
    attributeFilter: ['class']
  };
  const observerInstance = new MutationObserver(observer);
  observerInstance.observe(input, observerConfig);
});

// Вызываем функцию-наблюдателя в начале
observer()

//Запрещаем вводить цифры
inputDate.addEventListener('input', function (e) {
  const inputValue = e.target.value;
  if (inputValue.length > 2 && !(/\//g.test(inputValue))) {
    e.target.value = inputValue.slice(0, 2) + "/" + inputValue.slice(2);
  }
});
// проверяем валидность даты
inputDate.addEventListener('blur', function (e) {
  const firstTwoChars = inputDate.value.substring(0, 2);
  const fourthAndFifthChars = inputDate.value.substring(3, 5);
  if (isExpirationDateValid(firstTwoChars, fourthAndFifthChars)) {
    inputDate.classList.remove('invalid')
  } else {
    inputDate.classList.add('invalid')
  }
})
//запрещаем вводить цифры
inputNumber.addEventListener('input', function (e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '');
  const formattedText = inputText.replace(/(.{4})/g, '$1 ');
  e.target.value = formattedText.trim();
});
//проверяем валидность номера карты
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
//запрещаем вводить цифры и устанавливаем максимальную длинну в зависимости от типа плаженой системы
inputCode.addEventListener('input', function (e) {
  if (getCreditCardNameByNumber(validNumber) === 'Amex') {
    inputCode.setAttribute('maxlength', '4');
  } else {
    inputCode.setAttribute('maxlength', '3');
  }
  const inputText = e.target.value.replace(/\D/g, '');
  e.target.value = inputText.trim();
});
//проверяем валидность cvc
inputCode.addEventListener('blur', function (e) {
  if (isSecurityCodeValid(validNumber, inputCode.value)) {
    inputCode.classList.remove('invalid')
  } else {
    inputCode.classList.add('invalid')
  }
})
//проверяем валидность
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
