import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск самостоятельного теста.
import { runSelectMenuCase } from "./helpers/functions_select_menu.js";
// Подключаем готовый флоу этого тренажера.
test("селекты сохраняют одиночный и множественный выбор", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вкладка новая, вход уже сделала функция login выше.
  await runSelectMenuCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
