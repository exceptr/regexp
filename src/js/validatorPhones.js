export default function validatePhones(phone) {
  const regexp1 = /[-()\s]/g; // находит пробелы, '-', '(', ')'
  const regexp2 = /[\d{12}]/; // находит номер у которого 12 цифр
  let phoneNum = phone;
  if (regexp1.test(phoneNum)) {
    phoneNum = phoneNum.replace(regexp1, '');
    if (/^8/.test(phone)) {
      phoneNum = phoneNum.replace(/^8/, '+7'); // если номер начиется с 8, меняет на +7
    }
    if (/^7/.test(phone)) {
      phoneNum = phoneNum.replace(/^7/, '+7'); // если номер начиется с 7, меняет на +7
    }
    if (regexp2.test(phoneNum)) phoneNum = phoneNum.replace(regexp1, '');
  }
  return phoneNum;
}
