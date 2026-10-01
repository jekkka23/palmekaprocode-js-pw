import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runProgressBarCase } from "./helpers/functions_progress_bar.js";
// Подключаем готовый флоу этого тренажера.
test("прогресс начинается и сбрасывается", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runProgressBarCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
