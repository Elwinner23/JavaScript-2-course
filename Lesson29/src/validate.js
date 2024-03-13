import { isSecurityCodeValid } from 'creditcard.js';
import { isValid } from 'creditcard.js';

export default function validateCVV(cardNumber, CVVNumber) {
  return isSecurityCodeValid(cardNumber, CVVNumber) === true;
}

export default function validateCardNumber(cardNumber) {
  return isCodeValid(cardNumber) === true;
}
