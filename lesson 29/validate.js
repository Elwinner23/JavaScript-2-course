import { isSecurityCodeValid } from 'creditcard.js';

export default function validateCVV(cardNumber, CVVNumber) {
  return isSecurityCodeValid(cardNumber, CVVNumber) === true;
}