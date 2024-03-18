import { validateCreditCardNumberByName, validateCreditCardNumberByLength, validateCVV } from './validate';

describe('validateCVV', () => {
    it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами', () => {
        const validNumber = '4242 4242 4242 4242';
        expect(validateCVV(validNumber, '123')).toBe(true);
    });
    it('Валидация CVV/CVC не пропускает строку с одним цифровым символом', () => {
        const invalidNumber = '5834 5625 7970 2456';
        expect(validateCVV(invalidNumber, '1')).toBe(false);
    });
    it('Валидация CVV/CVC не пропускает строку с двумя цифровыми символами', () => {
        const invalidNumber = '3754 5859 0978 3421';
        expect(validateCVV(invalidNumber, '12')).toBe(false);
    });
    it('Валидация CVV/CVC не пропускает строку с тремя и более нецифровыми символами', () => {
        const invalidNumber = '5243 7653 2464 9678';
        expect(validateCVV(invalidNumber, 'false')).toBe(false);
    });
});

describe('validateCreditCardNumberByName', () => {
    it('Валидация номера карты пропускает строку с шестнадцатью цифровыми символами и корректным номером', () => {
        const validNumber = '4242 4242 4242 4242';
        expect(validateCreditCardNumberByName(validNumber)).toBe(true);
    });
    it('Валидация номера карты пропускает строку с шестнадцатью цифровыми символами и некорректным номером', () => {
        const invalidNumber = '0543 7658 3246 9457';
        expect(validateCreditCardNumberByName(invalidNumber)).toBe(false);
    });
    it('Валидация номера карты пропускает строку с шестнадцатью нецифровыми символами', () => {
        const invalidNumber = 'bank card home work';
        expect(validateCreditCardNumberByName(invalidNumber)).toBe(false);
    });
});

describe('validateCreditCardNumberByLength', () => {
    it('Валидация номера карты пропускает строку с менее чем шестнадцатью цифровыми символами и корректным номером', () => {
        const validNumber = '4242 4242 4242';
        expect(validateCreditCardNumberByLength(validNumber)).toBe(true);
    });
    it('Валидация номера карты не пропускает строку с менее чем шестнадцатью цифровыми символами и некорректным номером', () => {
        const invalidNumber = '0242 4242 4242';
        expect(validateCreditCardNumberByLength(invalidNumber)).toBe(false);
    });
    it('Валидация номера карты не пропускает строку с более чем шестнадцатью цифровыми символами', () => {
        const invalidNumber = '0543 7658 3246 9457 1454';
        expect(validateCreditCardNumberByLength(invalidNumber)).toBe(false);
    });
});