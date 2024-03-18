// import { isValid, isExpirationDateValid, isSecurityCodeValid, getCreditCardNameByNumber } from 'creditcard.js';
// isValid('4916108926268679'); // returns true
// isExpirationDateValid('02', '2020'); // returns true
// isSecurityCodeValid('4556603578296676', '250'); // returns true
// getCreditCardNameByNumber('4539578763621486'); // returns 'Visa'
function getFromInput() {
    let inputName = document.getElementById("full-name__input").value;
    console.log(inputName);
    return inputName;
}
let buttonPay = document.getElementById("pay__button");
buttonPay.addEventListener("click", getFromInput);

//# sourceMappingURL=index.672d4772.js.map
