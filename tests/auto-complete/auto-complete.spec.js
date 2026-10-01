import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runAutoCompleteCase } from "./helpers/functions_auto_complete.js";
// Подключаем готовый флоу этого тренажера.
test("подсказка добавляет цвет в теги", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runAutoCompleteCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
