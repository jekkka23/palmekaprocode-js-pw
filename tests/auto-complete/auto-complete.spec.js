import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск самостоятельного теста.
import { runAutoCompleteCase } from "./helpers/functions_auto_complete.js";
// Подключаем готовый флоу этого тренажера.
test("подсказка добавляет цвет в теги", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вкладка новая, вход уже сделала функция login выше.
  await runAutoCompleteCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
