import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runTooltipsCase } from "./helpers/functions_tooltips.js";
// Подключаем готовый флоу этого тренажера.
test("наведение показывает подсказку кнопки", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runTooltipsCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
