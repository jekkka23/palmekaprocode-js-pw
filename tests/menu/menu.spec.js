import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск самостоятельного теста.
import { runMenuCase } from "./helpers/functions_menu.js";
// Подключаем готовый флоу этого тренажера.
test("наведение открывает вложенный пункт Android", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вкладка новая, вход уже сделала функция login выше.
  await runMenuCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
