import  validateCVV  from './validate';

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