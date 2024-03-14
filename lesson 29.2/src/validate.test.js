import  validateCVV  from './validate';
import  validateCreditCardNumber  from './validate';

describe('validateCVV', () => {
  it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '123')).toBe(true);
  });
});

describe('validateCVV', () => {
  it('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1')).toBe(false);
    expect(validateCVV(validNumber, '12')).toBe(false);
  });
});

describe('validateCVV', () => {
it('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами', () => {
  const validNumber = '4242 4242 4242 4242';
  expect(validateCVV(validNumber, '1234')).toBe(false);
  });
});

describe('validateCVV', () => {
it('Валидация CVV/CVC не пропускает строки с тремя и более нецифровыми символами', () => {
  const validNumber = '4242 4242 4242 4242';
  expect(validateCVV(validNumber, 'abc')).toBe(false);
  });
});


describe('validateCreditCardNumber', () => {
  it('Валидация номера карты не пропускает некорректный номер карты', () => {
    const invalidCardNumber = '1234abcd5678efgh';
    expect(validateCreditCardNumber(invalidCardNumber)).toBe(false);
  });
});

  describe('validateCreditCardNumber', () => {
  it('Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы', () => {
    const invalidCardNumber = '4242 4242 4242 absd';
    expect(validateCreditCardNumber(invalidCardNumber)).toBe(false);
  });
});

  describe('validateCreditCardNumber', () => {
  it('Валидация номера карты не пропускает строку с недостаточным количеством цифр', () => {
    const shortCardNumber = '1234 5678';
    expect(validateCreditCardNumber(shortCardNumber)).toBe(false);
  });
});

  describe('validateCreditCardNumber', () => {
  it('Валидация номера карты не пропускает строку со слишком большим количеством цифр', () => {
    const longCardNumber = '1234 5678 9012 3456 7890 1234 5678 1234';
    expect(validateCreditCardNumber(longCardNumber)).toBe(false);
  });
});