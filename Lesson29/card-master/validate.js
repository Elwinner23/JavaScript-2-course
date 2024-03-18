import { isSecurityCodeValid } from 'creditcard.js';
export function validateCVV(cardNumber, CVVNumber) {
    return isSecurityCodeValid(cardNumber, CVVNumber) === true;
}

import { getCreditCardNameByNumber } from 'creditcard.js';
export function validateCreditCardNumberByName(cardNumber) {
    return getCreditCardNameByNumber(cardNumber) != 'Credit card is invalid!';
}

import { isValid } from 'creditcard.js';
export function validateCreditCardNumberByLength(cardNumber) {
    return isValid(cardNumber) === true;
}