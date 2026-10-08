import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск теста.
import { runTextBoxCase } from "./helpers/functions_text_box.js";
// Подключаем готовый флоу из соседней папки.
test("форма показывает отправленные имя и почту", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вкладка новая, вход уже сделала функция login выше.
  await runTextBoxCase(page, { name: "Иван Петров", email: "ivan@example.ru" });
  // Передаем входные значения; хелпер их введет и проверит.
});
// Завершаем тест.
