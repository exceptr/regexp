import Validator from '../validatorUserName';

test('Проверка валидации userName', () => {
  const expectedResult = { userName: 'Test14test' };
  expect(new Validator('Test14test')).toEqual(expectedResult);
});

test('Проверка исключения при вводе недопустимого userName', () => {
  expect(() => new Validator('1Test14test')).toThrowError();
});
