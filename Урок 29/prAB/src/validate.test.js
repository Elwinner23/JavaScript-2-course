
import {validateCVV} from './validate';

describe('validateCVV', () => {
    it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(validateCVV(validNumber, '123')).toBe(true);
    });
    it('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами.',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(validateCVV(validNumber, '12')).toBe(false);
    });
    it('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами.',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(validateCVV(validNumber, '1234')).toBe(false);
    });
    it('Валидация CVV/CVC не пропускает строки с тремя и более нецифровыми символами.',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(validateCVV(validNumber, 'abc')).toBe(false);
    });
})

import {CreditCardNameByNumber} from './validate';

describe('CreditCardNameByNumber', () => {
    it('Валидация номера карты не пропускает некорректный номер карты',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(CreditCardNameByNumber(validNumber, '0000 1234 0543 0000')).toBe(false);
    });
    it('Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(CreditCardNameByNumber(validNumber, 'abc3 dfg1 3452 5678')).toBe(false);
    });
    it('Валидация номера карты не пропускает строку с недостаточным количеством цифр',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(CreditCardNameByNumber(validNumber, '1234 1234')).toBe(false);
    });
    it('Валидация номера карты не пропускает строку со слишком большим количеством цифр.',
    () => {
        const validNumber = '4242 4242 4242 4242';
        expect(CreditCardNameByNumber(validNumber, '1234 1234 1234 1234 1234')).toBe(false);
    });
})