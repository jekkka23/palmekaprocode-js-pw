import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск самостоятельного теста.
import { runFilesCase } from "./helpers/functions_upload_download.js";
// Подключаем готовый флоу этого тренажера.
test("файл выбирается и скачивается", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вкладка новая, вход уже сделала функция login выше.
  await runFilesCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
