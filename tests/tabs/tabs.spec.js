import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runTabsCase } from "./helpers/functions_tabs.js";
// Подключаем готовый флоу этого тренажера.
test("выбранная вкладка меняет панель", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runTabsCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
