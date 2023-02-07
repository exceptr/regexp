export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const regexp = /^[a-z][-\w]*[a-z]$/i;
    const regexp2 = /\d{4}/;
    if (regexp.test(this.userName) && !(regexp2.test(this.userName))) {
      return this.userName;
    }
    return 'Некорректно введённое имя';
  }
}
