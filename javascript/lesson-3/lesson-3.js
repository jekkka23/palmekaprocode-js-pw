function makeStudentEmail(number) {
// Объявляем функцию: number получит значение, когда мы ее вызовем.
  return "student-" + number + "@example.ru";
  // Соединяем части адреса и возвращаем готовую строку из функции.
}
// Закрываем функцию: ее код пока не выполнялся.
const firstEmail = makeStudentEmail(17);
// Передаем 17 и сохраняем результат student-17@example.ru.
const secondEmail = makeStudentEmail(18);
// Передаем 18: та же функция возвращает уже другой адрес.
console.log("Первый адрес:", firstEmail);
// Печатаем адрес, который вернулся из первого вызова.
console.log("Второй адрес:", secondEmail);
// Печатаем адрес, который вернулся из второго вызова.
