import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск самостоятельного теста.
import { runFramesCase } from "./helpers/functions_frames.js";
// Подключаем готовый флоу этого тренажера.
test("XPath находит текст внутри iframe", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вкладка новая, вход уже сделала функция login выше.
  await runFramesCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
