function validateCardNumber(cardNumber) {
    const validationResult = cardValidator.number(cardNumber);
    if (validationResult.isValid) console.log("Номер карты валиден");
    else console.log("Номер карты невалиден");
}
validateCardNumber("4111111111111111");

//# sourceMappingURL=index.672d4772.js.map
