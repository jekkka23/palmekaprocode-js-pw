import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск теста.
import { runCheckBoxCase } from "./helpers/functions_check_box.js";
// Подключаем флоу проверки чекбоксов.
test("Рабочий стол выбирает Заметки и Команды", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вход уже сделала функция login выше.
  await runCheckBoxCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
