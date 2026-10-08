import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск теста.
import { runSelectableCase } from "./helpers/functions_selectable.js";
// Подключаем хелпер выбора.
test("выбранные элементы появляются в результате", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем независимую проверку.
  await runSelectableCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
