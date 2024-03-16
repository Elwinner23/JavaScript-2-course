import  validateCVV  from './validate.js';
import validateCardNumber from './validate1.js';

describe('validateCVV', () => {
  it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '123')).toBe(true);
  });
  it('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '13')).toBe(false);
  });
  it('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '13123')).toBe(false);
  });
  it('Валидация CVV/CVC не пропускает строки с тремя и более нецифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, 'asdfas')).toBe(false);
  });
});

describe('validateCardNumber', () => {
  it('Валидация номера карты не пропускает некорректный номер карты', () => {
    const validNumber = '1233 4242 4242 4242';
    expect(validateCardNumber(validNumber)).toBe(false);
  });
  it('Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы.', () => {
    const validNumber = '1233 asf2 4f42 4242';
    expect(validateCardNumber(validNumber)).toBe(false);
  });
  it('Валидация номера карты не пропускает строку с недостаточным количеством цифр', () => {
    const validNumber = '1233 4242 4242 42';
    expect(validateCardNumber(validNumber)).toBe(false);
  });
  it('Валидация номера карты не пропускает строку со слишком большим количеством цифр.', () => {
    const validNumber = '1233 4242 4242 4242 1233';
    expect(validateCardNumber(validNumber)).toBe(false);
  });
});