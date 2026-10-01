const student = { name: "Иван Петров", email: "ivan@example.ru", age: 18, isActive: true };
// Создаем запись ученика: строки name и email, число age и логическое значение isActive.
const expectedEmail = "ivan@example.ru";
// Отдельно задаем почту, которую ожидаем увидеть у ученика.
const hasName = student.name.length > 0;
// Получаем true, если в имени есть хотя бы один символ.
const isAdult = student.age >= 18;
// Получаем true, если возраст не меньше 18.
const emailMatches = student.email === expectedEmail;
// Получаем true, если почта ученика строго совпадает с ожидаемой.
const canStart = hasName && isAdult && student.isActive && emailMatches;
// Объединяем проверки: если хотя бы одна дала false, canStart тоже будет false.
if (canStart) {
// Переходим в эту ветку, когда все данные подходят.
  console.log("Данные готовы");
  // Печатаем успешный результат в терминале.
} else {
// Переходим в эту ветку, когда хотя бы одна проверка не прошла.
  console.log("Проверьте данные");
  // Печатаем результат, который подсказывает исправить исходные данные.
}
// Закрываем условие: выполнится только одна из двух веток.
