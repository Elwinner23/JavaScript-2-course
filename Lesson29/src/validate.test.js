import  validateCVV  from './validate';
import validateCardNumber from './validate.js';


describe('validateCVV', () => {
  it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '123')).toBe(true);
  });

  //1
  it('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '12')).toBe(false);
    expect(validateCVV(validNumber, '1')).toBe(false);
  });

  //2
  it('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '12345')).toBe(false);
  });

  //3
  it('Валидация CVV/CVC не пропускает строки с тремя и более нецифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, 'abcde')).toBe(false);
  });
});

describe('validateCardNumber', () => {

  //1
  it('Валидация номера карты не пропускает некорректный номер карты', () => {
    const validNumber = '1234 4242 4242 4242';
    expect(validateCardNumber(validNumber)).toBe(false);
  });

  //2
  it('Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы.', () => {
    const validNumber = '4242 abcd 4242 4242';
    expect(validateCVV(validNumber)).toBe(false);
  });

  //3
  it('Валидация номера карты не пропускает строку с недостаточным количеством цифр', () => {
    const validNumber = '4242 4242 4242 42';
    expect(validateCVV(validNumber)).toBe(false);
  });

  //4
  it('Валидация номера карты не пропускает строку со слишком большим количеством цифр.', () => {
    const validNumber = '4242 4242 4242 4242 2222';
    expect(validateCVV(validNumber)).toBe(false);
  });
});