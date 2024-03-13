import { isSecurityCodeValid } from 'creditcard.js'

export function validateCVV(cardNumber, CVVNumber) {
 return isSecurityCodeValid(cardNumber, CVVNumber) === true;
}

import { getCreditCardNameByNumber } from 'creditcard.js'

export function CreditCardNameByNumber(cardNumber, validNumber) {
 return getCreditCardNameByNumber(cardNumber, validNumber) === true;
}
