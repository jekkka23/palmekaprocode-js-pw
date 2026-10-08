import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск самостоятельного теста.
import { runSortableCase } from "./helpers/functions_sortable.js";
// Подключаем готовый флоу этого тренажера.
test("перетаскивание меняет порядок карточек", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вкладка новая, вход уже сделала функция login выше.
  await runSortableCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
