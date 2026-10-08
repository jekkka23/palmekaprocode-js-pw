import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск теста.
import { runModalCase } from "./helpers/functions_modal_dialogs.js";
// Подключаем хелпер окон.
test("маленькое окно открывается и закрывается", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем самостоятельную проверку.
  await runModalCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
