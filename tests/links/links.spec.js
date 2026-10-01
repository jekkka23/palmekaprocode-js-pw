import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runLinksCase } from "./helpers/functions_links.js";
// Подключаем готовый флоу этого тренажера.
test("ссылка возвращает к списку тренажеров", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runLinksCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
