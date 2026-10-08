import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск теста.
import { runRecordCase } from "./helpers/functions_web_tables.js";
// Подключаем флоу создания и проверки записи.
test("новая строка появляется в таблице", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем независимую проверку.
  await runRecordCase(page, {
  // Передаем данные сотрудника в хелпер.
    firstName: "Мария",
    // Задаем имя.
    lastName: "Соколова",
    // Задаем фамилию.
    email: "maria.table@example.ru",
    // Задаем почту для поиска новой строки.
    age: "30",
    // Задаем допустимый возраст.
    salary: "120000",
    // Задаем неотрицательную зарплату.
    department: "QA",
    // Задаем отдел.
  });
  // Завершаем передачу данных.
});
// Завершаем тест.
