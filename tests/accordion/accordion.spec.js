import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск теста.
import { runAccordionCase } from "./helpers/functions_accordion.js";
// Подключаем флоу аккордеона.
test("аккордеон открывает и закрывает раздел", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем самостоятельный тест.
  await runAccordionCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
