import cardValidator from "card-validator";

function pay() {
   const number_card = document.getElementById('card-number').value;

   const validationResult = cardValidator.number(number_card);

   console.log(validationResult);

   if (validationResult.isValid) {
      console.log('Номер карты валиден');
   } else {
      alert('Номер карты не валиден')
   }
}

function input_card(input) {
   const cardNumber = input.value.replace(/\D/g,'');
   let formatcardnumber = '';
   for (var i = 0; i < cardNumber.length; i += 4) {
      if (i !== 0) {
      formatcardnumber += '-';
      }
      formatcardnumber += cardNumber.substring(i, i + 4);
   }
   return formatcardnumber;
}

document.addEventListener('DOMContentLoaded', function() {
   const button = document.getElementById('card-btn');
   button.addEventListener('click', pay);

   const cardNumberInput = document.getElementById('card-number');
   cardNumberInput.addEventListener('input', function() {
      this.value = input_card(this);
   });
});