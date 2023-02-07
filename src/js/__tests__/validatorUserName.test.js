import Validator from '../validatorUserName';

test('Проверка валидации userName', () => {
  expect(new Validator('Test14test').validateUsername()).toBe('Test14test');
});

test('Проверка исключения при вводе недопустимого userName', () => {
  expect(new Validator('1Test14test').validateUsername()).toBe('Некорректно введённое имя');
});
