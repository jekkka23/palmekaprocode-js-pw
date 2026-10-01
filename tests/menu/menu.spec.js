import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runMenuCase } from "./helpers/functions_menu.js";
// Подключаем готовый флоу этого тренажера.
test("наведение открывает вложенный пункт Android", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runMenuCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
