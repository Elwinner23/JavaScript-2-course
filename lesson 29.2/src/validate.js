import { isSecurityCodeValid, isValid } from 'creditcard.js';

export default function validateCVV(cardNumber, CVVNumber) {
  return isSecurityCodeValid(cardNumber, CVVNumber) === true;
}


export default function validateCreditCardNumber(cardNumber){
  return isValid(cardNumber) === true;
}