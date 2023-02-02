import validatePhones from '../validatorPhones';

test('Проверка валидации номера начинающегося с "8"', () => {
  const num = '8 (927) 000-00-00';
  const expectedResult = '+79270000000';
  expect(validatePhones(num)).toBe(expectedResult);
});

test('Проверка валидации номера начинающегося с "7"', () => {
  const num = '7 960 000 00 00';
  const expectedResult = '+79600000000';
  expect(validatePhones(num)).toBe(expectedResult);
});

test('Проверка валидации номера Китая', () => {
  const num = '+86 000 000 0000';
  const expectedResult = '+860000000000';
  expect(validatePhones(num)).toBe(expectedResult);
});
