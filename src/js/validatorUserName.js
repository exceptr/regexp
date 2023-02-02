export default class Validator {
  constructor(userName) {
    this.validateUsername(userName);
  }

  validateUsername(userName) {
    const regexp = /^[a-z][-\w]*[a-z]$/i;
    const regexp2 = /\d{4}/;
    if (regexp.test(userName) && !(regexp2.test(userName))) {
      this.userName = userName;
    } else {
      throw new Error('Некорректно введённое имя');
    }
  }
}
