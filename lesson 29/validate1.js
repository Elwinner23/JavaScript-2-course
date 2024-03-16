import { isValid } from 'creditcard.js';

export default function validateCardNumber(cardNumber) {
    return isValid(cardNumber) === true;
  }