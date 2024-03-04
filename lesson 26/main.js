

let inputCarta = document.getElementById("nomer");

inputCarta.addEventListener('input', function(e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '').slice(0, 16);
  const formattedText = inputText.replace(/(.{4})/g, '$1 ');
  e.target.value = formattedText.trim();
  if (formattedText.length < 20) {
    e.target.style.border = '2px solid red';
  } else {
    e.target.style.border = '1px solid #ccc';
  }
});


document.getElementById('nomer').oninput = function () {
  let cardNum = this.value;
  if (cardNum.trim().length > 5) {
    let cardInfo = new CardInfo(cardNum.trim(), {
      banksLogosPath: './node_modules/card-info/dist/banks-logos/',
      brandsLogosPath: './node_modules/card-info/dist/brands-logos/'
    });
  }}


let inputsrok = document.getElementById("one");

inputsrok.addEventListener('input', function(e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '').slice(0, 4);
  const formattedText = inputText.replace(/(.{2})/g, '$1/');
  e.target.value = formattedText.trim();
});


let inputKod = document.getElementById("two");

inputKod.addEventListener('input', function(e) {
  const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '').slice(0, 3);
  const formattedText = inputText.replace(/(.{0})/g, '$1');
  e.target.value = formattedText.trim();
});





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
